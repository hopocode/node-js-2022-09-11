// const  fs from 'fs';
 

const file = __dirname + "/neco,txt"

class Family {

    names = ["Pepa", "Jarda"];
    surname = "Novák";

    printNames() {
        this.names.forEach(function(firstName){
            console.log([firstName, this.surname].join(" "));
        });
        //return "Pepa";
    }

    // chyba this neexistuje, ukazuje dovnit funce
    // names = ["Pepa", "Jarda"];
    // surname = "Novák";

    // printNames = () => {
    //     this.names.forEach((firstName) => {
    //         console.log([firstName, this.surname].join(" "));
    //     });
    // }
}

export default Family;