query("Select * from users", (error, users) => {
    console.log(error, data);
});

const queryPromis = new Promise((resolve, reject) => {
    query("Select * from users", (error, data) => {
         if(error) {
             reject(error)
         } else {
             resolve(data)
         }    
    }) 
});

const createQueryPromise = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql, (error, data) => {
            if(error) {
                reject(error);
            } else {
                resolve(data);
            }
        })
    });
}


// createQueryPromise("Select * from suers").then(users => {

// }).catch

console.startTime();
const usersPromis = createQueryPromise("Select * from suers");
const articlesPromis = createQueryPromise("Select * from articles");

// zde runtime zastraví
debugger;

Promise.all([usersPromise, articlesPromise]).then((users, articles) => {

})


// zavyslé na datech od users
usersPromis.then(users => {
    articlesPromis = createQueryPromise("Select * from articles");
    articlesPromis.then(articles => {

    }).catch(errr => {

    })
}).catch(usersErrr => {

})

// 3 vteřiny
const getUsersAndArticles = async () => {
    try {
        const users = await createQueryPromise("Select * from suers"); // 2 vteřiny
        const articles = await createQueryPromise("Select * from articles"); // 1 vteřina
        return [users, articles];
    } catch(e) {

    }
}  

// 2 vteřiny
const getUsersAndArticles2 = async () => {
    try {
        const usersPromise = createQueryPromise("Select * from suers");
        const articlesPromise = createQueryPromise("Select * from articles");
        return [await usersPromise, await articlesPromise];
    } catch(e) {

    }
}  

getUsersAndArticles().then(([users, articles]));

