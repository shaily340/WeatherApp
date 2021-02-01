const { response } = require('express');
const express=require('express');
const app=express();
const forecast = require('./utils/forecast');
const geocode=require('./utils/geocode');
app.set("view engine","ejs");
app.use(express.static('public'));

app.get("",(req,res)=>{
    res.render("home");
})

app.get("/weather",(req,res)=>{
    if(!req.query.address)
    res.send({error:"No location given"});
    geocode(req.query.address,(error,data)=>{
        if(error)
        res.send({error});
        forecast(data.longitude,data.latitude,(error,forecastData)=>{
            if(error)
            res.send({error});
            res.send({forecast:forecastData,location:data.location,address:req.query.address});
        })
    })
})


app.listen(3000,()=>{
    console.log('Listening!!');
})