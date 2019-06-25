let rectangleLength = prompt("How long is the length?")
let rectangleWidth = prompt("How long is the width?")

const rectangleArea = parseInt(rectangleWidth) * parseInt(rectangleLength)

console.log(`${rectangleArea} = ${rectangleWidth} * ${rectangleLength}`)

switch (true) {
    case rectangleLength > rectangleWidth:
        let sizeDifference = parseInt(rectangleLength) - parseInt(rectangleWidth)
        console.log(`The length is longer by ${sizeDifference}`);
        break

    case rectangleLength < rectangleWidth:
        let sizeDifference = parseInt(rectangleWidth) - parseInt(rectangleLength)
        console.log(`The width is longer by  ${sizeDifference}`);
        break
    default:
        console.log("no difference, your shape is a square!");
        break

}

// Feel free to have some experiments with variety of shape formulas
