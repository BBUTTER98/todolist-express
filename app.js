const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const getDate = require(__dirname+'/date.js');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var tasks = ["example"];
var workTasks = [];
app.get("/",function(req,res){
    
    day = getDate();
    res.render('list',{
        type: day,
        taskName: tasks,
        });
});
app.post("/",function(req,res){
    console.log(req.body);
    if(!(req.body.task == "")){
        if(req.body.btn === "Work"){
            workTasks.push(req.body.task);
            res.redirect("/work");
            console.log(workTasks);
        }
        else{
            tasks.push(req.body.task);
            res.redirect("/");
            console.log(tasks);
        }
    }
    
    
    
});
app.get("/work",function(req,res){
    res.render("list",{
        type: "Work",
        taskName: workTasks,
    })
});

app.listen(3000,function(){
    console.log("Server listen on port 3000");
});