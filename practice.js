const express = require('express')
const app = express()
const port=8000;
//app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


app.listen(port, ()=>{
console.log("running")
})
app.use(express.json());
app.get('/demo',(req,res) =>{
 
   var Name = req.query.Name
   var Age =  req.query.Age
   var Address = req.query.Address
   var Aadharno = req.query.Aadharno;
console.log(Name,Age,Address,Aadharno)
  
  if(Aadharno.startsWith("1")){
     var creditscore = {"score":200,"risklevel":"low","loanAmount":200000}
    res.status(200).json(creditscore)
  }
  else if(Aadharno.startsWith("2")){
    var creditscore = {"score":300,"risklevel":"high"}
   res.status(200).json(creditscore)
  }
  else{
    var creditscore = {"score":500,"risklevel":"zero"}
    res.status(200).json(creditscore)
  }
  res.end()
})

app.use(express.json());
app.get('/demo',(req,res) =>{
 
   var Name = req.query.Name
   var Age =  req.query.Age
   var Address = req.query.Address
   var Aadharno = req.query.Aadharno;
console.log(Name,Age,Address,Aadharno)
  
  if(Aadharno.startsWith("1")){
     var creditscore = {"score":200,"risklevel":"low","loanAmount":200000}
    res.status(200).json(creditscore)
  }
  else if(Aadharno.startsWith("2")){
    var creditscore = {"score":300,"risklevel":"high"}
   res.status(200).json(creditscore)
  }
  else{
    var creditscore = {"score":500,"risklevel":"zero"}
    res.status(200).json(creditscore)
  }
  res.end()
})