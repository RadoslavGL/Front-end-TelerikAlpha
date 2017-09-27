function solve(args) {
    let number = +args
    let thirdDigit = Math.floor(number / 100 % 10)
    let resultBool

    if(thirdDigit === 7) {
        resultBool = 'true'
    } 
    else{
        resultBool = 'false ' + thirdDigit
    }

    console.log(resultBool) 
    
 }

 solve('1234')