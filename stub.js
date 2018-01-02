'use strict';

/* eslint no-console: 0 */

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),    
    router = require('express').Router();

app.use(bodyParser.json());    

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

router.get("/categories", function (req, res) {
    let categories = {
        "Celebrations & Events": {
            "weddings": ["dining", "decorations"],
            "new baby": ["balloons", "soft toys"]
        },
        "art": {
            "print": ["digital", "etchings"],
            "sketch": ["portrait", "landscape"]
        }
    };
    res.send(categories);
});

router.get("/variants", function (req, res) {
    let variants = ['color', 'size'];
    res.send(variants);
});

router.post("/product", function (req, res) {
    console.log('this is the data sent from VueJS \n' + JSON.stringify(req.body))
    res.status(200)
    res.send('OK')  
});    

app.use(router);

// start the app
console.log(`Listening on: 9000`);
const server = app.listen(9000);

module.exports = server;
