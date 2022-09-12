const User = require("./User")

var u = new User();
console.log(u.getName());

// console.log(this);

const car = {
    name: "BMW",
    surname: "Dvořák"
}

//car,name = undefined;
delete car.name;