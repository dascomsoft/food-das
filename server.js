const express = require('express') ;

const path = require('path') ; 

const app = express() ;

const mysql = require('mysql2');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');



//static files 
app.use(express.static(path.join(__dirname , 'public')))



app.get('/', (req , res) =>{
    res.sendFile(path.join(__dirname , 'public' , 'home.html' ))})


    app.get('/about', (req , res) =>{
        res.sendFile(path.join(__dirname , 'public' , 'about.html'))})
    


app.get('/chef', (req , res) =>{
    res.sendFile(path.join(__dirname , 'public' , 'chef.html'))})


app.get('/contact', (req , res) =>{
    res.sendFile(path.join(__dirname , 'public' , 'contact.html'))
})

app.get('/book-table', (req , res) =>{
    res.sendFile(path.join(__dirname , 'public' , 'book-table.html'))
})


const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});