const isValid = (stringPattern) => {
    const opens = ['(', '[', '{']
    const closes = [')', ']', '}']

    const patternToCheck = stringPattern.trim().split("")

    for (let i = 0; i < patternToCheck.length; i+=2) {
        const openCheck = opens.indexOf(patternToCheck[i])
        const closeCheck = closes.indexOf(patternToCheck[i+1])

        if (openCheck != closeCheck) return false
    }

    return true
}

module.exports = isValid