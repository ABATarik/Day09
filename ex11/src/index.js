function switchCase() {
    var animals = "";

    switch (animals) {
        case ("a"):
            animals = "antilope";
            break;
        case "b":
            animals = "bird";
            break;
        case "c":
            animals = "cat";
            break;
        case "d":
            animals = "stuff";
            break;
        default:
            animals = "stuff;"
            break;


    }
    return animals
};

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));


module.exports = switchCase;