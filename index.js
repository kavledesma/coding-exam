const express = require('express')
const palindromePairs = require('./problem_set_1/palindrome_pairs')
const isValid = require('./problem_set_2/valid_parentheses')
const lengthOfLIS = require('./problem_set_3/longest_increasing_subsequence')

const app = express()
app.use(express.json())

const PORT = 8080

app.post('/palindromePairs', (req, res) => {
    try {
        const { words } = req.body
        
        if (words) {
            res.status(200).send(palindromePairs(words))   
        } else {
            res.status(400).send({ msg: "Please create an array called 'words' containing the words to test." })
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
        } else {
            res.status(400).send({ msg: "Please add a parameter called 'pattern'." })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ msg: error.message })
    }
})

app.post('/lengthOfLIS', (req, res) => {
    try {
        const { nums } = req.body
        
        if (nums) {
            res.status(200).send(lengthOfLIS(nums).toString())   
        } else {
            res.status(400).send({ msg: "Please add an array called 'nums' containing the numbers to test." })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ msg: error.message })
    }
})


app.listen(PORT, () => {
    console.log(`Server running! Listening to port: ${PORT}`)
})