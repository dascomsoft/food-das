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



// Route 
app.post('/register', (req, res) => {
    const { email, nom, telephone } = req.body;

    // Vérification 
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).send('Email déjà utilisé');
    }

    const userId = uuidv4();

    users.push({ id: userId, email, nom, telephone });
    res.status(201).send('Utilisateur enregistré');
});


const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});