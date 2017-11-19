var fs = require("fs");
var request = require("request");
var json2csv = require("json2csv");
var couchbase = require("couchbase");
var cluster = new couchbase.Cluster("http://127.0.0.1:8091");
var bucket = cluster.openBucket("beer-sample");
cluster.authenticate(process.argv[2], process.argv[3]);
var fields = ["No", "id"];

request('http://127.0.0.1:8092/beer-sample/_design/beer/_view/brewery_beers?limit=6&stale=false&connection_timeout=60000&inclusive_end=true&limit=10&skip=0', (err, response, body) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Response CODE:-", response.statusCode);
        let data = JSON.parse(body);
        let rows = data.rows;
        let j = 1;
        let reqArray = [];
        for (let i in rows) {
            let obj = {
                'No': j++,
                'id': rows[i].id
            }
            reqArray.push(obj);
        }
        console.log(reqArray);
        let csv = json2csv({
            data: reqArray,
            fields: fields
        });
        fs.writeFile('top10.csv', csv, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("File Saved!");
            }
        })
    }
}).auth(process.argv[2], process.argv[3], false);