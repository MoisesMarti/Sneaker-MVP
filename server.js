// access the express library by requring express 
const { select } = require('cheerio-select')
const express = require('express')
// use express library and putting it in var
const app = express()
// env var 
const PORT = process.env.PORT || 3000
// middleware that intrercepts req and spits out readable data
app.use(express.json())
//requiring the Pool data from the db.js file
const client = require('./db')

app.get('/my_sneakers', async (req,res)=>{
try {
  await client.query('SELECT * FROM user_Table',(err,result) =>{
    res.send(result.rows)
  } )
} catch (error) {
  res.status(500)
}
})
app.get('/my_sneakers/:id', async (req, res) => {
  try {
    const result = await client.query(`SELECT * FROM user_Table WHERE  persons_id = ${req.params.id}`, (err, result) => {
      if (err) throw err;
      res.json(result.rows);
    });
  } catch (error) {
    res.status(500);
  }
});


app.post('/my_sneakers', async (req,res) =>{
  try {
    const {name, size} =req.body
    const {rows} = await client.query('INSERT INTO user_Table (name,size) VALUES ($1,$2)',[name,size])
    res.send('SUCCSESFUL')
  } catch (error) {
    
  }
})

app.put('/my_sneakers/:id', async (req, res) => {
  try {
  const {name, size} = req.body;
  const result = await client.query(`UPDATE user_Table SET name = $1, size = $2 WHERE persons_id = ${req.params.id}`, [name, size]);
  res.status(200).send("Sneaker updated successfully!");
  } catch (error) {
  res.status(500);
  }
  });

app.delete('/my_sneakers/:id', async (req, res) => {
  try {
    const result = await client.query(`DELETE FROM user_Table WHERE persons_id = ${req.params.id}`);
    res.status(200).send("Sneaker deleted successfully!");
  } catch (error) {
    res.status(500);
  }
});
 

  


app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});