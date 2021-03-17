function myForLoop1() {

    for (var evenNumbers = 0; evenNumbers < 9; evenNumbers++, evenNumbers++) {
        console.log(evenNumbers);

    }

};

function myForLoop2() {
    for (var evenInversNumber = 8; evenInversNumber >= 0; evenInversNumber--, evenInversNumber--) {
        console.log(evenInversNumber);

    }

};

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};


