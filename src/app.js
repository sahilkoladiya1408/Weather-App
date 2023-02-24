const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
const hbs = require('hbs')

// public static path

const templets_path = path.join(__dirname,"../templets/views")
const partials_path = path.join(__dirname,"../templets/partials")

app.set('view engine', 'hbs');
app.set('views',templets_path);
hbs.registerPartials(partials_path);

const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path));


// routing 
app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg: 'Opps! Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
})