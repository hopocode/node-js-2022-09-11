const u1 = require("./User")()
const u2 = require("./User")()
require('loadenv')();
u1.surname = "Pospíšil";
u2.surname = "Novák";

console.log(process.env.NODE_ENV);
console.log(process.env.HONZA);

// console.log(u1);
// console.log(u2);

//const Family = require("./Family");

//const f = new Family();
//f.printNames();

// var u = new User();
// console.log(u.getName());

// // console.log(this);

// const car = {
//     name: "BMW",
//     surname: "Dvořák"
// }

// //car,name = undefined;
// delete car.name;