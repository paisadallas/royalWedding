const functions = require("firebase-functions");
const admin=require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });


 const app = express();
 app.use(cors({ origin: true }));
 
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
 
 admin.initializeApp();
 
 // Step 1
 let transporter = nodemailer.createTransport({
     host: 'smtp-mail.outlook.com',
     port:587,
     tls:{
         ciphers:'SSLv3'
     },
     
     auth: {
         user: 'texasdatalogic@outlook.com', // TODO: your gmail account
         pass:  '184865901792*' // TODO: your gmail password
     }
 });
 
 //Firebase
 app.post('/', (req, res) => {
     
     let dataSample ={
         name: 'john',
         email: 'john@gmail.com',
         phone: '3115542616',
         city: 'Medellin'
     }
     
     // Step 2
     let mailOptions = {
         from: 'paisadallas@gmail.com', // TODO: email sender      
         to: 'paisadallas@gmail.com', // TODO: email receiver -DEV
         subject: 'Texas Data Logic',
         text: 'Wooohooo it works!! Good job fredy'
     };
 
             mailOptions.html = `<div> 
                             <h1>Texas Data Logic</h1>
                             <h2><br>Customer info:</h2>
                             <p><b>Name: ${req.body.name}</b> </p>
                              <p><b> Email: ${req.body.email}</p>
                              <p><b> Phone number: ${req.body.phone}</p>
                              <p><b> Interesting: ${req.body.interest}</p>  
                              <p><b> Time contact: ${req.body.timeContact}</p>  
                              </div>`
     //our code    
       
      return transporter.sendMail(dataSample)
          .then(snapshot=>{
             const data = snapshot;
             console.log("Wow excelente!")
             res.status(200).json({Success: true})
             return {supset: true}
          })
          .catch(error=>{
                 console.log(error)
                 res.status(500).json({Success: false})
                 return{supset: false}
     
          })
       });





// exports.sendEmail = functions.https.onRequest(emailController.sendEmailForm)