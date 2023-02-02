const express = require('express')
const dotenv = require('dotenv')
const {Pool} = require('pg')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const client = new Pool({
    connectionString: process.env.DATABASE_URL
})

app.use(express.json())
app.use(express.static('public'))

app.route('/my_sneakers')
  .get(async (req,res)=>{
    try {
      const notes = await client.query(`SELECT * FROM user_table`)
      res.status(200).json(notes.rows)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })

  .post(async (req,res) =>{
    try {
      const {notes} = req.body
      await client.query(`INSERT INTO user_table (notes) VALUES ('${notes}')`)
      res.status(201).json({validation: true})
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })

app.route('/my_sneakers/:id')
  .patch(async (req, res) => {
    try {
      const {id} = req.params
      const {body} = req
      await client.query(`UPDATE user_table SET notes = '${body.notes}' WHERE persons_id = ${id}`)
      res.status(200).json({validation: true})
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })

  .delete(async (req, res) => {
    const {id} = req.params
    console.log(id)
    try {
      await client.query(`DELETE FROM user_table WHERE persons_id = ${id}`)
      res.status(204).send();
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })
 
app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
}); 