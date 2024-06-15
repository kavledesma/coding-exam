const express = require('express')
const palindromePairs = require('./problem_set_1/palindrome_pairs')
const isValid = require('./problem_set_2/valid_parentheses')

const app = express()
app.use(express.json())

const PORT = 8080

app.post('/palindromePairs', (req, res) => {
    try {
        const { words } = req.body
        
        if (words) {
            res.status(200).send(palindromePairs(words))   
        } else {
            res.status(500).send({ msg: "Please create an array called 'words' containing the words to test."})
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ msg: error.message })
    }
})

app.post('/validParentheses', (req, res) => {
    try {
        const { pattern } = req.body
        
        if (pattern) {
            res.status(200).send(isValid(pattern))   
            console.log("pass")
        } else {
            res.status(500).send({ msg: "Please add a parameter called 'pattern'."})
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ msg: error.message })
    }
})


app.listen(PORT, () => {
    console.log(`Server running! Listening to port: ${PORT}`)
})