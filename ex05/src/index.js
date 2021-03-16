function compareStrictValue(m) {
    if (m != 55) {

        return "Not equal"
    }
    return "Equal"
};

console.log(compareStrictValue(55))
console.log(compareStrictValue("55"))
console.log(compareStrictValue("21"))
console.log(compareStrictValue(12))
console.log(compareStrictValue("Doe"))

module.exports = compareStrictValue;