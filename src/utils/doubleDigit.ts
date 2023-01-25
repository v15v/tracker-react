function getDoubleDigit(digit: number): string {
    if (digit < 10) {
        return "0" + digit
    } else {
        return digit.toString()
    }
}

export default getDoubleDigit