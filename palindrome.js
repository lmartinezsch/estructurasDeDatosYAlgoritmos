const clearText = text => {
    return text.replace(/\s/g, "").replace(",", "").toLowerCase()
}

const isPalindrome = text => {
    let text2 = text.split("").reverse().join("")
    
    return clearText(text) === clearText(text2) ? true : false
}

console.log(isPalindrome("Yo dono rosas, oro no doy"))