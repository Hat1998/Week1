import  express,{Application, Request, Response} from'express'
 
const app:Application = express()



app.get('/api',(req:Request,res:Response)=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json)
    .then(json => res.send(json))

})




const PORT:Number = 3004
app.listen(PORT, function(){
    console.log(`Server listening on port ${PORT}`)
})