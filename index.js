const express = require('express');
const app=express()
const cors=require('cors')
const port=process.env.PORT || 5000 ;

const dishes=require("./data/foodreceipe.json")
app.use(cors());
const ReceipeDetails=require("./data/categorieschef.json")

app.get('/',(req,res)=>{
    res.send('chef is coming')
})
app.get('/ReceipeDetails',(req,res)=>{
    res.send(ReceipeDetails)
})

app.get('/ReceipeDetails/:id',(req,res)=>{
    const id=req.params.id

    const selected=dishes.filter(item=>item.category_id===id)
    res.send(selected)

})

app.get('/dishes',(req,res)=>{
    res.send(dishes)
})
app.listen(port,()=>{
    console.log(`chef runnini on ${port}`)
})