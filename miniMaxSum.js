const miniMaxSum = arr => {
    // Write your code here
    let minSum = arr.slice(0,arr.length-1).reduce((a, b) => a + b, 0)
    let maxSum = arr.slice(1,arr.length).reduce((a, b) => a + b, 0)

    return minSum + " " + maxSum
}


console.log(miniMaxSum([7,69, 2, 221, 8974]))