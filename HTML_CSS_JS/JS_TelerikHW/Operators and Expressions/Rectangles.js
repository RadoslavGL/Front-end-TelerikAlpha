function solve(args) {
   let width = +args[0];
   let height = +args[1];

   let area = width * height

   let perimenter = 2 * (width + height)
   

   console.log(area.toFixed(2) + ' ' + perimenter.toFixed(2));

}

solve('4', '5');    