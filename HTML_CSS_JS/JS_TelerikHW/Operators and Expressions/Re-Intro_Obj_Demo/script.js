// function makePerson(first, last){
//     return{
//         first: first,
//         last: last,
//         fullName: function(){
//             return this.first + ' ' + this.last
//         },
//         fullNameReversed: function(){
//             return this.last + ', ' + this.first
//         }
//     };
// }

// let e = makePerson('John', 'Doe');
// console.log(e.fullName());
// console.log(e.fullNameReversed());



// function Person(first, last){
//     function personFullName() {
//         return this.first + ' ' + this.last;
//     }
    
//     function personFullNameReversed() {
//         return this.last + ', ' + this.last;
//     }
//     return {
//         first,
//         last,
//         personFullName,
//         personFullNameReversed
//     }
// }

Person.prototype.fullName = function () {
    return this.first + ' ' + this.last;
}

Person.prototype.fullNameReversed = function () {
    return this.last + ', ' + this.last;
}   

function Person(first, last){
    this.first = first;
    this.last = last;
}

let e = new Person('John', 'Doe')
console.log(e.fullName());
console.log(e.fullNameReversed());