const router=require('express').Router()
const Url=require("../models/url")
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
router.get("/:a",(req,res)=>{
    console.log("a")
    // Url.find()
    // .then((result)=>{
    //     var incomingurl=req.params.a.split(" ")
    //     console.log(incomingurl,"inc")
    //     var Data=result
    //     const Datalength=Data.length
    //     var count=0;
    //     for (let index = 0; index < Datalength; index++) {
    //         if (Data[index].shortname===incomingurl[1]) {
    //             count++;
    //             break;
    //         }
    //     }
    //     if (count===0) {
    //         if(incomingurl[0]==="" || incomingurl[1]===""){
    //             res.status(200).send("Enter a Valid Url")
    //         }
            
    //         else{
    //             var testurl=is_url(incomingurl[0]);
    //             if (testurl) {
    //             const datainstance= new Url(req.body)
    //             datainstance.save()
    //             .then((result)=>{
    //             res.status(201).send(`Shortend Url : http://thinn.herokuapp.com/${incomingurl[1]} `)
    //             res.end()    
    //         })
    //         .catch((err)=>console.log(err))
    //         }
    //         else{
    //             res.status(200).send("Url not valid")
    //         }

    //     }
    //     } else {
    //         res.status(200).send(" oops it seems like Shortname is already taken.") 
    //     }

    // })
    // .catch((err)=>{
    //     console.log(err)
    // })
})

module.exports=router