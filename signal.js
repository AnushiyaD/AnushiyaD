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
app.post('/signal',(req,res) =>{
  
   var name = req.body.name
   var age =  req.body.age

console.log(name,age)
  
  if(name.startsWith("a")){
     var SignalData = {"balance":200000,"remaing":200000}
    res.status(200).json(SignalData)
  }
  else if(name.startsWith("s")){
    var SignalData = {"balance":400000,"remaing":400000}
   res.status(200).json(SignalData)
 }
  else{
    var SignalData = {"balance":200000,"remaing":200000}
    res.status(200).json(SignalData)
  }

  res.end()
})