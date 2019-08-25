const express = require("express");
const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');


/*static routes*/
app.get("/", (req, res)=>{
    res.send("Hello World!!!");
});

//pug template route
app.get("/pug", (req,res) => {
   res.render("hello_pug.pug");
});

//static jpg file through pug view
app.get("/staticFile", (req,res) => {
   res.render("staticFileTest.pug");
});

app.get('/partials', function(req, res){
   res.render('content');
});


/* Dynamic Routes */
//dynamic route (accepts any id)
app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });

 //Only accepts numeric 3-digit ids
 app.get('/test/:id([0-9]{3})', function(req, res){
    res.send('3-digit-id is: ' + req.params.id);
 });

 //passing in multiple params (:name and :id)
 app.get('/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });

 /*Dynamic Views*/
 //dynamic pug view
 app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "MyGithub", 
      url:"https://github.com/alexanderamundson"
   });
 });


/*Special Routes */
//'all' ignores the http method
app.all('/test', (req, res)=>{
    res.send("the 'all' method works the same regardless of the HTTP method type ----- e.g:"+
              "app.all('/test', (req, res)=>{ ...");
 });

 //responds to any request that doesn't match any other routes
 app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL. 404');
 });


 app.listen("8080");