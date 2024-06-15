const express = require('express')
const { palindromePairs } = require('./problem_set_1/palindrome_pairs')

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


app.listen(PORT, () => {
    console.log(`Server running! Listening to port: ${PORT}`)
})