const express = require("express");
const app = express();

//static route
app.get("/", (req, res)=>{
    res.send("Hello World!!!");
});

//dynamic route (accepts any id)
app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });

//'all' ignores the http method
app.all('/test', (req, res)=>{
    res.send("the 'all' method works the same regardless of the HTTP method type ----- e.g:"+
              "app.all('/test', (req, res)=>{ ...");
 });
app.listen("8080");