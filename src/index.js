require('dotenv').config()
const express = require('express')
const knex = require('./conexao')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
	try {
		const carros = await knex('carros')
		return res.json(carros)

	} catch (error) {
		console.log(error)
		return res.status(500).json({ MENSAGEM: 'Erro do servidor' })
	}
})

const port = process.env.PORT

app.listen(port, () => {
	console.log(`Servidor em pé na porta ${port}`)
})