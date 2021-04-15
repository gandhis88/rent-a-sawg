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
const usersDatabase = "SELECT * FROM `Users` Order by usernameLogin ASC";
const adminsDatabase = "SELECT * FROM `Admin` Order by usernameAdmin ASC";
const locationDatabase = "SELECT * FROM `Locations` Order by street_address ASC";

// ESSENTIALS

run.use(express.urlencoded({ 
    extended: true 
}));

run.use(express.json());

run.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

run.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "sethidig_admin",
    password: dbPass,
    database: "sethidig_TermProject"
});

// GETTING (GET)

function getAllLocations(res, type){
    db.connect(function (err) {
        let sql = "";
        if (type == "Locations"){
            sql = locationDatabase;
        }
        db.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
};

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
};

function getAllStats(res, type) {
    db.connect(function (err) {
        let sql = "";
        if (type == "Statistics"){
            sql = statsDatabase;
        }
        db.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
};

run.get(EPR, (req, res) => {
    let type = "Swag";
    db.query(merchDatabase, (err, result) => {
        if (err) {
            throw err;
        } 
    });
    if(true){
        getAll(res, type);
    }
});

run.get(EPR + "/locations", (req, res) => {
    let type = "Locations";
    db.query(locationDatabase, (err, result) => {
        if (err) {
            throw err;
        } 
        res.json(result);
    });
    if(true){
        getAllLocations(res, type);
    }
});

run.get(EPR + "/statistics", (req, res) => {
    let type = "Statistics";
    db.query(statsDatabase, (err, result) => {
        if (err) {
            throw err;
        } 
        res.json(result);
    });
    if(true){
        getAllStats(res, type);
    }
});

run.get(EPR + "/users", (req, res) => {
    db.query(usersDatabase, (err, result) => {
        if (err) {
            throw err;
        } 
        res.json(result);
    });
});

run.get(EPR + "/admins", (req, res) => {
    db.query(adminsDatabase, (err, result) => {
        if (err) {
            throw err;
        } 
        res.json(result);
    });
});

// POSTING (POST)

run.post(EPR, (req, res) => {
    let type = req.body.type;
    let sql = "";
    if (type == "Swag"){
        let brand = req.body.brand;
        let item = req.body.item;
        let description = req.body.description;
        let price = req.body.price;
        sql = "INSERT INTO `Swag` (brand, item, description, price) VALUES ('" + brand + "', '" + item + "', '" + description + "', '" + price + "' );";
    }

    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } 
        res.json(result);
    });
});

run.post(EPR + "/users", (req, res) => {
    let username = req.body.usernameLogin;
    let password = req.body.passwordLogin;
    let sql = "INSERT INTO `Users` (usernameLogin, passwordLogin) VALUES ('" + username + "', '" + password + "' );";
        
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

run.post(EPR + "/admins", (req, res) => {
    let username = req.body.usernameAdmin;
    let password = req.body.passwordAdmin;
    let sql = "INSERT INTO `Admin` (usernameAdmin, passwordAdmin) VALUES ('" + username + "', '" + password + "' );";
        
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// DELETING (DELETE)

run.delete(EPR, (req, res) => {
    let id = req.body.swagID;
    let sql = "DELETE FROM `Swag` WHERE id = " + id + ";";
    
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// EDITING (PUT)


run.listen(port, () => {
    console.log(`listening on port: ${port}`);
});