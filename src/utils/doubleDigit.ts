function getDoubleDigit(digit: number) {
    if (digit < 10) {
        return "0" + digit
    } else {
        return digit
    }
}

export default getDoubleDigit