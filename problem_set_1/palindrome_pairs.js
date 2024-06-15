const isPalindrome = (word) => {
    const reversed = word.split("").reverse().join("");

    return reversed == word ? true : false
}

const palindromePairs = (wordsArray) => {
    let result = []

    if (wordsArray.length) {
        for (let i = 0; i < wordsArray.length; i++) {
            for (let j = i + 1; j < wordsArray.length; j++) {
                if (isPalindrome(`${wordsArray[i]}${wordsArray[j]}`)) result.push([i, j])
            }
        }
    }

    return result
}

module.exports = palindromePairs