//
function getDoubleDigit(digit: number): string {
    if (digit < 10) {
        return "0" + digit.toString()
    } else {
        return digit.toString()
    }
}

export default getDoubleDigit