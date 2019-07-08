const mongoose = require('mongoose')

if (process.argv.length <3) {
    console.log('missing argument, need 1 or 3 (password, name, number)')
    process.exit(1)
}

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', phonebookSchema)

const [,, password, name, number] = process.argv

const url = `mongodb+srv://fullstack:${password}@cluster0-8u40w.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true})

if (process.argv.length === 3) {
   Person.find({}).then(res => {
       res.forEach(pers => console.log(pers))
       mongoose.connection.close()
   })     
} else {

    const person = new Person({
        name,
        number
    })

    person.save().then(res => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })

}