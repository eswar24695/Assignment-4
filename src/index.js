const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
// app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.post("/add", (req, res) => {
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
       return res.json({
            "status": "Failure",
            "message":"Invalid data types"
            })
    }
    let sum = Number(req.body.num1) + Number(req.body.num2);
    if(req.body.num1<-1000000 || req.body.num2<-1000000 || sum<-1000000)
    {
        return res.json({
            "status": "Failure",
            "message":"UnderFlow"
            })
    }
    else if(req.body.num1>1000000 || req.body.num2>1000000 || sum>1000000)
    {
        return res.json({
            "status": "Failure",
            "message":"OverFlow"
            })
    }
    res.json(
        {
            "status": "success",
            "message": `The sum of given two numbers ${sum}`
        }
    )
})
app.post("/sub",(req,res)=>{
    if(isNaN(req.body.num1) || isNaN(req.body.num2))
    {
        return res.json({
            "status":"Failure",
            "message":"Invalid data types"
        })
    }
    let sub=Number(req.body.num1)-Number(req.body.num2);
    if(req.body.num1<-1000000 || req.body.num2<-1000000 || sub<-1000000)
    {
        return res.json({
            "status": "Failure",
            "message":"UnderFlow"
            })
    }
    else if(req.body.num1>1000000 || req.body.num2>1000000 || sub>1000000)
    {
        return res.json({
            "status": "Failure",
            "message":"OverFlow"
            })
    }
    res.json({
        "status":"Success",
        "message" : `The difference of given two numbers ${sub}`
    })
})
app.post("/mul",(req,res)=>{
    if(isNaN(req.body.num1) || isNaN(req.body.num2))
    {
        res.json({
            "status":"Failure",
            "message":"Invalid data types"
        })
    }
    let mul=Number(req.body.num1)* Number(req.body.num2);
    if(req.body.num1<-1000000 || req.body.num2<-1000000 || mul<-1000000)
    {
        return res.json({
            "status": "Failure",
            "message":"UnderFlow"
            })
    }
    else if(req.body.num1>1000000 || req.body.num2>1000000 || mul>1000000)
    {
        return res.json({
            "status": "Failure",
            "message":"OverFlow"
            })
    }
    res.json({
        "status":"success",
        "message":`The product of two numbers ${mul}`
    })
})
app.post("/div",(req,res)=>{
    if(isNaN(req.body.num1) || isNaN(req.body.num2))
    {
        res.json({
             "status":"Failure",
             "message":"Invalid data types"
        })
    }
    else if(req.body.num2==0)
    {
        res.json({
            "status":"Failure",
            "message":"Cannot divide by zero"
        })
    }
    let div=Number(req.body.num1)/Number(req.body.num2);
    if(req.body.num1<-1000000 || req.body.num2<-1000000 || div<-1000000)
    {
        return res.json({
            "status": "Failure",
            "message":"UnderFlow"
            })
    }
   else if(req.body.num1>1000000 || req.body.num2>1000000 || div>1000000)
    {
        return res.json({
            "status": "Failure",
            "message":"OverFlow"
            })
    }
    res.json({
        "status":"success",
        "message":`the division of two numbers ${div}`
    })
})
app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;