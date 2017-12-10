# THIS SHOULD BE FOLLOW FOR DEVELOPING API IN JIOCINEMA CMS

## 1. things to do

    1. write api and test it with postman 
    2. fetch postman collection from git repo and add your api to that existing collection
    3. fetch apidocs from git repo and write apidocs & then add to apidocs collection
    4. fetch jsdocs from git repo and write jsdocs & then add to jsdocs collection
    5. do unit testing <write all user cases..>

## 2. Structure of directory

1.root
<br/>![root](/images/root.png)
<br/>2.apis
<br/>![apis](/images/apis.png)
<br/>3.models
<br/>![models](/images/models.png)
<br/>4.ApiDocs
<br/>![ApiDocs](/images/ApiDocs.png)
<br/>5.JsDocs
<br/>![JsDocs](/images/JsDocs.png)
<br/>6.PostmanCollection
<br/>![postmanCollection](/images/postmanCollection.png)
<br/>7.images
<br/>![images](/images/images.png)

## 3. How to run ApiDocs and JsDocs

1.  run following  command for ApiDocs  :
``` javascript
$ apidoc -i apiDocs/ -o apiDocsSetup/
info: Done.
```
2. first goto apis/models dir , inside of JsDocs dir
 run following  command for JsDocs  :
 * inside apis dir :
``` javascript
$ jsdoc ../../../apis/fileFromApiDir.js -d .
```
 * inside models dir
``` javascript
$ jsdoc ../../../models/fileFromRootDir.js -d .
```

\* do above mention things first and then only add to qa for actual manual testing.

