const express = require('express')
require('./db/mongoose')
require('dotenv').config()
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 

/*
app.use((req,res,next)=>{
if(req.method==='GET')
   res.send('user request disabled')
else 
//next will go to router handler
next()


})
app.use((req,res,next)=>{

   res.status(503).send('under maintance')


})
*/

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


const multer=require('multer')
const upload=multer({
dest:'images'
})



app.post('/upload',upload.single('up'),(req,res)=>{
res.send()

})





//middware do something before routeHandler 

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5c2e505a3253e18a43e612e6')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5ec69600c7e338196c9a80b8')
   await user.populate('tasks').execPopulate()
  //  console.log(user.tasks)
}

//main()





app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
