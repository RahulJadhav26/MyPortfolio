const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var firebase = require("firebase");

const app = express()

app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  }

  firebase.initializeApp(firebaseConfig)
var ref = firebase.database().ref('portfolio')
// var refst = firebase.storage().ref('images')
var blogRef = ref.child('blogs') 
// var myBlogRef =ref.child('myblogs')
app.post("/blogs", (req,res) =>{
    res.send(
        {msg : "Blog posted"}
        )
     blogRef.push(
         {
           imageName:req.body.imageName,
           ext:req.body.ext,
           text: req.body.text
          }
         )
})

app.get("/myblogs", (req,res) =>{
  blogRef.once('value',function(snapshot){
    console.log(snapshot.key)    
    res.send(snapshot.val())
  })
  
})

app.delete("/myblogs/:id" , (req,res) => {
  blogRef.child(req.params.id).remove() 
})


app.listen(process.env.PORT || 8081)
