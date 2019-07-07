const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3001

let persons = [
    {
        name: "Arto Hellas",
        number: "121432-1234",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-32125",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    },
]

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny'))

app.get('/api/persons', (req, res) => {
    res.send(persons)
})

app.get('/info', (req, res) => {
    const numberOfEntries = persons.length
    const time = new Date().toLocaleString()
    const html = `
        <p> Phonebook has info for ${numberOfEntries} people. </p>
        <p> ${time} </p>
    `
    res.send(html)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(pers => pers.id === id)

    if(person) {
        res.send(person)
    } else {
        res.status(400).send({
            error: "no person found"
        })
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(pers => pers.id !== id)

    res.status(204).end()
})

morgan.token('body', (req, res) => JSON.stringify(req.body)) //loggs the POST req body
app.use(morgan(':body'))

app.post('/api/persons', (req, res) => {
    const data = req.body

    if(!data.number || !data.name) {
       return res.status(400).send({
            error: "missing data"
        })
    } else if (persons.find(person => person.name === data.name)) {
        return res.status(409).send({
            error: "name must be unique"
        })
    }


    const person = {
        name: data.name,
        number: data.number,
        id: Math.floor(Math.random()*100000)
    }

    persons.push(person)

    res.status(201).send(person)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})