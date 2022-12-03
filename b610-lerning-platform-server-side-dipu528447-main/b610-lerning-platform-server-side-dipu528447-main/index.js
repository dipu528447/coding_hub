const express=require('express');
const app=express();
const cors=require("cors");
app.use(cors());

const port=process.env.PORT||5000;
const courseCategory= require('./data/categories.json');
const courses= require('./data/courses.json');
app.get('/', (req,res)=>{
    res.send(courseCategory)
})
app.get('/category', (req,res)=>{
    res.send(courses)
})
app.get('/category/:id', (req,res)=>{
    const id=req.params.id;
    const filtered =courses.filter(item=>item.category==id)
    res.send(filtered)
})

app.get('/categoryDetails/:id', (req,res)=>{
    const id=req.params.id;
    const filtered =courses.find(item=>item.id==id)
    res.send(filtered)
})
app.get('/checkout/:id', (req,res)=>{
    const id=req.params.id;
    const filtered =courses.find(item=>item.id==id)
    res.send(filtered)
})
app.listen(port,()=>{
    console.log('now server is running on port ',port)
})