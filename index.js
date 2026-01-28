const express = require('express');
const app = express();
const { body, validationResult } = require("express-validator");


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var validationRegistration = [
      body('username')
            .notEmpty().withMessage("username is requireddddd")
            .isLength({ min: 3 }).withMessage("minimmm 3 char requreddd")
            .trim()
            .isAlpha().withMessage("only letters allowed")
            .customSanitizer(value => 
                  value.toLowerCase())
            .custom((valu) =>{
                 if (valu === "admin") {
                  throw new Error(" must be valid name, not admin")
                 }
                 return true;
            }),

      body('email')
            .isEmail().withMessage("email is must")
            .normalizeEmail(),

      body('password')
            .isLength({ min: 5, max: 11 }).withMessage("passwrd must be 5 to 10 char long")
            .isStrongPassword(),

      body('age')
            .isNumeric().withMessage("ENter numbers for age")
            .isInt({ min: 18 }).withMessage("min age must 18 old"),

      body('state')
            .isIn(['maharashtra', 'karnataka', 'andhra_pradesh', 'goa']).withMessage("Enter valid state")


]

app.get('/', (req, res) => {
      res.render("myform.ejs", { error: [] });
})
app.post("/saveform", validationRegistration, (req, res) => {
      const error = validationResult(req);
      if(error.isEmpty()){
              return  res.send(req.body);

         }
        res.render("myform.ejs", {error:error.array()})

});












// to start server

app.listen(3000, () => {
      console.log("started");
})