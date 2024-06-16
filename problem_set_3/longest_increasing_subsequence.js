const lengthOfLIS = (arrayOfNums) => {
    if (arrayOfNums.length == 0) return 0

    let memoArray = new Array(arrayOfNums.length).fill(1)

    for (let i = 1; i < arrayOfNums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arrayOfNums[i] > arrayOfNums[j]) {
                memoArray[i] = Math.max(memoArray[i], memoArray[j] + 1)
            }
        }
    }
    
    return Math.max(...memoArray)
}

module.exports = lengthOfLIS