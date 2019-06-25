let chooseShape;

while (true) {

    chooseShape = prompt(" What object you want to calculate " +
        "1. Rectangle " +
        "2. Triangle " +
        "3. Circle")

    if (chooseShape == '1') {
        let rectangleLength = prompt("How long is the length?")
        let rectangleWidth = prompt("How long is the width?")
        const rectangleArea = parseFloat(rectangleWidth) * parseFloat(rectangleLength)
        console.log(`${rectangleArea} = ${rectangleWidth} * ${rectangleLength}`)
        alert(rectangleArea)
        break
        // return rectangleArea;
        
    }
    else if (chooseShape == '2') {
        let triangleBase = prompt("How many cm is the Base?")
        let triangleHeight = prompt("How many cm is the Height?")
        const triangleArea = 1 / 2 * parseFloat(triangleBase) * parseFloat(triangleHeight)


        console.log(`${triangleArea} = 1/2 * ${triangleBase} * ${triangleHeight}`)
        alert(triangleArea)
        break
        // return triangleArea;

    }
    else if (chooseShape == '3') {

        let circleRadius = prompt("How many cm is the Radius?")
        const circleArea = 22 / 7 * Math.pow(circleRadius, 2)

        console.log(circleArea)
        alert(circleArea)
        break
        // return circleArea;
    }
    alert('wrong answer')
}












// Feel free to have some experiments with variety of shape formulas
