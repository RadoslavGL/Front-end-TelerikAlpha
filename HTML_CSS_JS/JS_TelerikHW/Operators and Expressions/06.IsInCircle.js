function solve(args) {
    let pointX = +args[0]
    let pointY = +args[1]

    let circleX = 0 
    let circleY = 0
    let circleRadius = 2;

    let distanceFromCenter = Math.sqrt(Math.pow((pointX - circleX), 2) + Math.pow((pointY - circleY), 2))

    console.log(distanceFromCenter <= circleRadius ?
         `yes ${distanceFromCenter.toFixed(2)}` :
          `no ${distanceFromCenter.toFixed(2)}`)
    // console.log(pointX)
    // console.log(pointY) 
 }
 solve(['-1.5', '-1.5'])