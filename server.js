const express = require('express');
const mongoose = require('mongoose');
const crud = require('./model');
const app = express();

mongoose.connect("mongodb+srv://vijayrock:vijayrock@cluster0.fxjem.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>{
        console.log("DB connected...")
    })
app.get('/',async (req,res)=>{
res.send("hii");
})
app.use(express.json());
app.post('/add',async (req,res)=>{
    try{
    var {username,message}=req.body;
    let newMessage = new crud({
        username,
        message
    });
await newMessage.save();
res.status(200).send('message sent...')
}
    catch(err){
        console.log(err)
    }
    
})

app.get('/all',async (req, res)=>{
    try{
    let full = await crud.find()
    res.status(200).json(full)
    }
    catch(err){
        console.log(err)
        return res.status(500).send('Internal server Error')
    }
})

app.post('/:Id',async (req,res)=>{
    let result = await crud.findById(req.params.Id);
    res.send(result);
    })

app.listen(5000,()=>{
    console.log("server running.....")
})