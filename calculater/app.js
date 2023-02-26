const express = require('express');
const data = require('./data');

const app = express();

 const Auth = (req, res, next) => {
    if(req.query.admin == 'true'){
      next()
    }else{
        res.send('you are not authenticated')
    }

 }


app.get('/add/:num1/:num2',Auth, (req, res) => {

    let n1 = parseInt(req.params.num1)
    let n2 = parseInt(req.params.num2)
    let result = n1 + n2
     res.send("sum"+result)
 });

 app.get('/sub/:num1/:num2', (req, res) => {
    let n1 = parseInt(req.params.num1)
    let n2 = parseInt(req.params.num2)
    let result = n1 - n2
     res.send("sub"+result)
 });

 app.get('/mul/:num1/:num2', (req, res) => {
    let n1 = parseInt(req.params.num1)
    let n2 = parseInt(req.params.num2)
    let result = n1 * n2
     res.send("mul"+ result.toString())
 });
 
 app.get('/div/:num1/:num2', (req, res) => {
    let n1 = parseInt(req.params.num1)
    let n2 = parseInt(req.params.num2)
    let result = n1 / n2
     res.send("divide"+result)
 });




 app.get('*', (req, res) => {
    res.status(404).json({"message": "not found"});
 });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});