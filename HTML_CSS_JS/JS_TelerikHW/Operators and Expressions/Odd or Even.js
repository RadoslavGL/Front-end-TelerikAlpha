
function solve(args) {
    let input = args[0];
    if(input % 2 !== 0){
        console.log('odd ' + input);
    }
    else{
        console.log('even ' + input);
    }
}   

solve([5]);