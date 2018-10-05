const express = require('express');
const router = express.Router();
const isNull = require('../script').isNull;
const Database = require('../Database');
const Cryptr = require('cryptr');
const config = require('../config');
const cryptr = new Cryptr(config.security.key);


router.get('/', (req, res, next) => {
    res.render('signup');
});

router.post('/', (req, res, next) => {
    let name = req.body.name;
    let username = req.body.username;
    let password = req.body.password;

    if (isNull(name) || isNull(username) || isNull(password)) {
        console.log('entrou no if');
        res.status(400).json({'error': 'Invalid name, username and/or password!'});
    }
    
    password = cryptr.encrypt(password);
    
    console.log(`name: ${name}, username: ${username}, password: ${password}`);

    createUser(name, username, password, (error, results, rows) => {
        if (error) {
            res.json({"message": "Error creating user.",
                      "error": error});
        }
        res.render('login', {
            "messages": {
                "success": "User created succesfully!"
            }
        });
    });

});

function createUser(name, username, password, callback) {
    if (!checkUser(username)) {
        let querystring = `INSERT INTO User (nome, user, senha) VALUES ('${name}', '${username}', '${password}');`;
        Database.query(querystring, callback);
    } else {
        callback("User already exists!");
    }
}

function checkUser(username) {
    let querystring = `SELECT * FROM User WHERE user = '${username}'`;
    let ret;
    Database.query(querystring, (error, results, rows) => {
        if (error) {
            console.log(error);
            ret = true;
        } else {
            ret = results.length > 0 ? true : false;
        }
    });
    console.log(ret);
    return ret;
}

module.exports = router;