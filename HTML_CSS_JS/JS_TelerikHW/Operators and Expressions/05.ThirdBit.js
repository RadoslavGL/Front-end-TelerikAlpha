function solve(args) {
    let input = args
    if(isNaN(input)){
        return 'NaN'
    }

    let binary = Number(input).toString(2)
    let thirdBit = binary[binary.length - 4]

    console.log(thirdBit)
 }

 solve('8')