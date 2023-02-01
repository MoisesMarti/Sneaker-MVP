//access the express library by requring express 
require('dotenv').config()
const express = require('express')
const cors = require('cors')
//use express library and putting it in var
const app = express()
//env var 
const PORT = process.env.PORT || 3000
//middleware that intrercepts req and spits out readable data
app.use(cors())
app.use(express.json())
//requiring the Pool data from the db.js file
const client = require('./db')
//app.use(express.static('Sneaker-MVP'))


const { Pool } = require("pg");

console.log('working')
const databaseconfig = {
   constring: process.env.DATABASE_URL
}
const pool = new Pool (databaseconfig)



app.get('/my_sneakers', async (req,res)=>{
try {
  await client.query('SELECT * FROM user_table',(err,result) =>{
    res.send(result.rows)
  } )
} catch (error) {
  res.status(500)
}
 })


app.get('/my_sneakers/:id', async (req, res) => {
  try {
    const result = await client.query(`SELECT * FROM user_table WHERE  persons_id = ${req.params.id}`, (err, result) => {
      res.json(result.rows);
    });
  } catch (error) {
    res.status(500);
  }
});


app.post('/my_sneakers', async (req,res) =>{
  try {
    const {notes} =req.body
    const {rows} = await pool.query('INSERT INTO user_table (notes) VALUES ($1)',[notes])
    res.send(rows)
  } catch (error) {
    res.send(error.message)
  }
})

app.put('/my_sneakers/:id', async (req, res) => {
  try {
  const {notes} = req.body;
  const result = await client.query(`UPDATE user_table SET notes = $1, WHERE persons_id = ${req.params.id}`, [notes]);
  res.status(200).send("NOTES updated successfully!");
  } catch (error) {
  res.status(500);
  }
  });

app.delete('/my_sneakers/:id', async (req, res) => {
  try {
    const result = await client.query(`DELETE FROM user_table WHERE persons_id = ${req.params.id}`);
    res.status(200).send("NOTES deleted successfully!");
  } catch (error) {
    res.status(500);
  }
});
 

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});