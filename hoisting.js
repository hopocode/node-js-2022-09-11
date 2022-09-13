var users = ["Adam", "Pepa"];

// Object.prototype

var users = {a1: "Adam", a2: "Pepa"};
const {a1, a2} = users;


for(i in users) {
    if(users.hasOwnProperty(i)) {

    }
    console.log(users[i]);
}

$.get("/users", (error, users) => {
    if(error) {

    }
})


var users = getUsers();
var articles = getArticles();
users.then(result => {
    const articles = getArticles(...);
    articles.then(articlesResult => {

    }).catch(err => {

    })
}).catch(err => {

});

