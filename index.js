var fs = require('fs');   
const express = require("express");
const cors=require('cors');

var metadataFile = fs.readFileSync('metadata.json');
var metadata = JSON.parse(metadataFile);
const app = express();   
    
app.listen(3000);    
app.use(express.static('public'));
app.use(cors());
  
app.get('/metadata/:id/', getMetadataElement);
  
function getMetadataElement(request, response) {
    var index = parseInt(request.params.id);
       
    response.send(metadata[index]);
}