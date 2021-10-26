const reverse = text => {
    if (text.length === 0) {
        return ""
    } else {
        let subText = text.substring(1)
        return reverse(subText) + text[0]
    }
}

console.log(reverse("hola"))