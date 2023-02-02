
const path = require('path')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(process.cwd(), 'public')))

const {JSDOM} = require('jsdom')
const $ = require('jquery')
const fs = require('fs')
const dotenv = require('dotenv')
const postgres = require('postgres')


dotenv.config()

const sql = postgres(process.env.DATABASE_URL)


app.get('/', async (req,res)=>{
try {
  res.sendFile(path.join(process.cwd(), "client.html"))
} catch (error) {
  throw error
}
})


app.get('/my_sneakers', async (req,res)=>{
try {
  const notes = await sql`
  SELECT notes FROM user_table
  `
  console.log(notes)
  res.json(notes)
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
    console.log(req.body)
    const {notes} =req.body
    await sql`
    INSERT INTO user_table (notes)
    VALUES (${notes})
    `
    console.log('hit')
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