import express  from 'express';

const app = express();

app.get('/users', (req,res) => {
  
  console.log("listando users");

  res.json({mensage: "hello word1111"});
});

app.listen(3333);