/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Person = require('./models/person');

const app = express();
// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(morgan('tiny'));

app.get('/api/people', (req, res, next) => {
  Person.find({}).then(people => res.send(people)).catch(next);
});

app.get('/info', (req, res, next) => {
  Person.find({})
    .then((people) => {
      const numberOfEntries = people.length;
      const time = new Date().toLocaleString();
      const html = `
                <p> Phonebook has info for ${numberOfEntries} people. </p>
                <p> ${time} </p>
            `;
      res.send(html);
    })
    .catch(next);
});

app.get('/api/people/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.send(person.toJSON());
      } else {
        res.status(204).end(); // no content
      }
    })
    .catch(next);
});

app.put('/api/people/:id', (req, res, next) => {
  const data = req.body;
  const person = {
    name: data.name,
    number: data.number,
  };

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then((updatedPerson) => {
      res.send(updatedPerson.toJSON());
    })
    .catch(next);
});

app.delete('/api/people/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
});

morgan.token('body', req => JSON.stringify(req.body)); // loggs the POST req body
app.use(morgan(':body'));

app.post('/api/people', (req, res, next) => {
  const data = req.body;

  if (!data.number || !data.name) {
    next({ message: 'missing data' });
  } /* else if (persons.find(person => person.name === data.name)) {
        return res.status(409).send({
            error: "name must be unique"
        })
    } */


  const person = new Person({
    name: data.name,
    number: data.number,
  });

  person.save().then((result) => {
    res.status(201).send(result.toJSON());
  }).catch(next);
});

const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).send({ error: 'malformatted id' });
  }

  if (error.message === 'missing data' || error.name === 'ValidationError') {
    return res.status(400).send({ error: error.message });
  }
  next(error);
};

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
