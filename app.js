const express=require('express')
const mongoose=require('mongoose')
const Url=require('./models/url')
var bodyParser = require('body-parser').json()
const { result } = require('lodash')

const app=express()

const DBURL="mongodb+srv://urlshortner:urlshortner@node.bczjx.mongodb.net/nodetest?retryWrites=true&w=majority"
mongoose.connect(DBURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{console.log('connected');
                 app.listen(process.env.PORT || 5000)})
.catch((err)=>console.log(err))

function is_url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}


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

app.post('/',bodyParser,(req,res)=>{
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
            if(req.body.shortname==="" || req.body.link===""){
                res.status(200).send("Enter a Valid Url")
            }
            
            else{
                var testurl=is_url(req.body.link);
                if (testurl) {
                const datainstance= new Url(req.body)
                datainstance.save()
                .then((result)=>{
                res.status(201).send(`Shortend Url : http://thinn.herokuapp.com/${req.body.shortname} `)
                res.end()    
            })
            .catch((err)=>console.log(err))
            }
            else{
                res.status(200).send("Url not valid")
            }

        }
        } else {
            res.status(200).send(" oops it seems like Shortname is already taken.") 
        }

    })
    .catch((err)=>{
        console.log(err)
    })
    
    
    
})
app.get('/dev',(req,res)=>{
    res.render("root");
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