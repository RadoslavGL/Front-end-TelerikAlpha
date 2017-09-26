function solve(args) {
   let width = +args[0];
   let height = +args[1];

   let area = function(width, height){
    return width * height
   };
   let perimenter = function(width, height){
    return 2 * (width + height)  
   }

   console.log(area + ' ' + perimenter);


}

solve('4', '5');    