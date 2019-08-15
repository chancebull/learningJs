var express = require('express');
var mysql = require('mysql');
var app = express();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Incorrect1@@',
  database: 'course_monger'
});

app.get("/", function(req, res){
    // Find count of users in DB
    var q = "SELECT COUNT(*) AS count FROM classes";
    connection.query(q, function(err, results){
        if(err) throw err;
        console.log(results);
    });
});

app.get("/allClasses", function(req, res){
    let q = 'SELECT * FROM classes';
    let allClass = connection.query(q,function(err,results){
        console.log(allClass)
    })
    return(
        <div>
            <p>
                {allClass}
            </p>
        </div>
    )
})


app.listen(3300, function(){
    console.log("Server running on 3000!");
});
