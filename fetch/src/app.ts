import  express,{Application, Request, Response} from'express'
 
const app:Application = express()
// let data = require('./data')

// app.use(express.json())


// app.get('/', (req:Request, res:Response) =>{

//     res.send(data)
// })

// app.post('/', (req, res) =>{
//     let newUser = req.body
//     data.push(newUser)
//     res.send(data)
// })

// app.delete('/', (req, res) =>{
//        data.pop( );

//     res.send(data)
// })

// app.patch('/:name', (req, res) =>{
     
      
//  res.send(data)
// })


app.get('/',(req:Request,res:Response)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json)
    .then(json => res.send(json))

})




const PORT:Number = 3003
app.listen(PORT, function(){
    console.log(`Server listening on port ${PORT}')`)
})