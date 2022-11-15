const mysql = require('mysql');  // подключили пакет mysql

// конфигурация
const conn  = mysql.createConnection({
    host: "itgid.mysql.tools",
    user: "itgid_nodetest",
    database: "itgid_nodecourse",
    passwors: "Al6gAi50Yi80"
});

conn.connect( err => {
    if(err) {
        console.log(err);
        return err;
    }
    else{
        console.log("Database-----------OK");
    }
})
let query = "SELECT * FROM user";
conn.query(query, (err, result, field) => {
    console.log(err);
    console.log(result);
    console.log(result[1]['lastname']);
    //console.log(field);
})

conn.end( err => {
    if(err) {
        console.log(err);
        return err;
    }
    else{
        console.log("Database-----------Close");
    }
});
