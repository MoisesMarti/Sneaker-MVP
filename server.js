
const dotenv = require('dotenv')
const express = require('express')
const postgres = require('postgres')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const sql = postgres(process.env.DATABASE_URL)

app.use(express.static('public'))
app.use(express.json())

app.route('/my_sneakers')
  .get(async (req,res)=>{
    try {
      const notes = await sql`SELECT * FROM user_table`
      res.status(200).json(notes)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })

  .post(async (req,res) =>{
    try {
      const {notes} = req.body
      await sql`INSERT INTO user_table (notes) VALUES (${notes})`
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
      console.log(body)
      await sql`UPDATE user_table SET notes = ${body.notes} WHERE persons_id = ${id}`
      res.status(200).json({validation: true})
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })

  .delete(async (req, res) => {
    const {id} = req.params
    console.log(id)
    try {
      const result = await sql`DELETE FROM user_table WHERE persons_id = ${id}`
      res.status(200).send("NOTES deleted successfully!");
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })
 

app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
}); 