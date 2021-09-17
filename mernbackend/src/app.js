const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const Register = require("./models/registers");
const { create } = require("hbs");

const port = process.env.port || 3000;
require("./db/conn");
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}))

hbs.registerPartials(partials_path);
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
app.get("/",(req, res)=>{
    res.render("index")
});
app.get("/Retrieve", (req,res) =>{
    res.render("Retrieve")
});
app.get("/index",(req,res)=>{
    res.render("index")
});
// create a new user in our database
app.post("/register", async(req,res) => {
try {
    const registerPatient = new Register({
        name: req.body.name,
        email: req.body.email,
        mobile : req.body.mobile,
        gender : req.body.gender,
        age : req.body.age,
        symptoms : req.body.symptoms,
        medicine: req.body.medicine
    })
    const registered= await registerPatient.save()
    res.status(201).render("index")
} catch (error) {
    res.status(400).send(error);
}
})
app.listen(port,() =>{
    console.log(`server is running at port no ${port}`);
})