// This is a demo file. 
const express = require('express');
const app = express();
const API_KEY = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"; 

app.get('/user', (req, res) => {
  const query = "SELECT * FROM users WHERE id = " + req.query.id;
  db.execute(query);
  res.send("User fetched");
});
