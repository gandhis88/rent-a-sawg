var http = require('http');
var cors = require('cors');
const express = require("express");
const mysql = require("mysql");
const run = express();

const dbPass = "sethiAdmin";
const port = process.env.PORT || 8888;
const EPR = "/COMP4537/termproject/API/V1";

const merchDatabase = "SELECT * FROM `Swag` Order BY brand ASC";
const statsDatabase = "SELECT * FROM `Stats` Order BY Endpoint ASC";
const stat_GET = "UPDATE `Stats` SET GET_statistics = GET_statistics + 1 WHERE Endpoint = '" + EPR + "'";
const stat_POST = "UPDATE `Stats` SET POST_statistics = POST_statistics + 1 WHERE Endpoint = '" + EPR + "'";

run.use(express.urlencoded({ 
    extended: true 
}));
run.use(express.json());

run.use(cors());

run.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

const db = mysql.createConnection({
    host: "localhost",
    user: "sethidig_admin",
    password: dbPass,
    database: "sethidig_TermProject"
});

run.get(EPR, (req, res) => {
    let type = "Swag";
    db.query(stat_GET, (err, result) => {
        if (err) {
            throw err;
        } 
    });
    //
    if(true){
        getAll(res, type);
    }
});

run.get(EPR + "/statistics", (req, res) => {
    db.query(statsDatabase, (err, result) => {
        if (err) {
            throw err;
        } 
        res.json(result);
    });

});

run.post(EPR, (req, res) => {
    let type = req.body.type;
    let sql = "";
    if (type == "Swag"){
        let brand = req.body.brand;
        let item = req.body.item;
        let description = req.body.description;
        let price = req.body.price;
        sql = "INSERT INTO Swag (brand, item, description, price) VALUES ('" + brand + "', '" + item + "', '" + description + "', '" + price + "' );";
    }

    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } 
        res.json(result);
    });
    db.query(stat_POST, (err, result) => {
        if (err) {
            throw err;
        } 
    });
});

function getAll(res, type){
    db.connect(function (err) {
        let sql = "";
        if (type == "Swag"){
            sql = merchDatabase;
        }
        db.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
}

run.listen(port, () => {
    console.log(`listening on port: ${port}`);
});