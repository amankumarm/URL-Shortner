const express=require('express')
const mongoose=require('mongoose')
const Url=require('./models/url')
const { result } = require('lodash')


const DBURL="mongodb+srv://urlshortner:urlshortner@node.bczjx.mongodb.net/nodetest?retryWrites=true&w=majority"
mongoose.connect(DBURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{console.log('connected');
                 app.listen(process.env.PORT || 5000)})
.catch((err)=>console.log(err))



const app=express()

//view engine
app.set('view engine','ejs')
app.set('views','templates')

//handling static files


app.use(express.static('static'))
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render('home',{status:"Shorten Your Url "})
    // res.end()
})

app.post('/',(req,res)=>{
    // console.log(req.body)
    Url.find()
    .then((result)=>{
        var incomingurl=req.body.shortname
        var Data=result
        const Datalength=Data.length
        var count=0;
        for (let index = 0; index < Datalength; index++) {
            if (Data[index].shortname===incomingurl) {
                count++;
                break;
            }
        }
        if (count===0) {
            const datainstance= new Url(req.body)
                datainstance.save()
                .then((result)=>{
                res.render('home',{status:`Shortend Url : http://thinn.herokuapp.com/${req.body.shortname} `})
                res.end()
            })
                .catch((err)=>console.log(err))
        } else {
            res.render('home',{ status:"Shortname-taken" })
        }

    })
    .catch((err)=>{
        console.log(err)
    })
    
    
    
})

app.use((req,res)=>{
    const incomingurl=req.url.slice(1)
    console.log(incomingurl)
    Url.find()
    .then((result)=>{
        const alldata=result
        const alldatalength=alldata.length
        let i=0;
        var count=0;
        for (i = 0; i < alldatalength; i++) {
            if (alldata[i].shortname===incomingurl) {
                count++;
                break   
            }
        }
        // console.log(alldata[i])
            // res.render('404')
            if (count>0) {
                res.redirect(alldata[i].link)
            }
            else{
                res.render('404')
            }
})
.catch((err)=>console.log(err))

})