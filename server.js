// access the express library by requring express 
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

 


app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});