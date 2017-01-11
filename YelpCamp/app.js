var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing"); 
});

var campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3832/9603531635_e348167e39.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3739/13679245855_885cde7e9f.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3832/9603531635_e348167e39.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3739/13679245855_885cde7e9f.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3832/9603531635_e348167e39.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3739/13679245855_885cde7e9f.jpg"}
];

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelp Camp Server has started!!"); 
});