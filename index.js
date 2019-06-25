let chooseShape = prompt(" What object you want to calculate " +
    "1. Rectangle " +
    "2. Triangle " +
    "3. Circle")

switch (true) {
    case chooseShape == '1':
        let rectangleLength = prompt("How long is the length?")
        let rectangleWidth = prompt("How long is the width?")
        const rectangleArea = parseInt(rectangleWidth) * parseInt(rectangleLength)

        console.log(`${rectangleArea} = ${rectangleWidth} * ${rectangleLength}`)

    case chooseShape == '2':
        let triangleBase = prompt("How many cm is the Base?")
        let triangleHeighth = prompt("How many cm is the Height?")
        const triangleArea = 1 / 2 * parseInt(triangleBase) * parseInt(triangleHeighth)

        console.log(`${triangleArea} = 1/2 * ${triangleBase} * ${triangleHeighth}`)
        break

    case chooseShape == '3':
        let circleRadius = prompt("How many cm is the Radius?")
        const circleArea = 3.14 * circleRadius

        console.log(`${circleArea} = 3.14 * ${circleRadius}`)
        break

    default:
        prompt(chooseShape)
        break

}









// Feel free to have some experiments with variety of shape formulas
