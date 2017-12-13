var express = require('express');
const axios = require('axios');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let url = "https://kgng8eutc9.execute-api.us-west-2.amazonaws.com/orders";
    axios
        .get(url)
        .then(response => {
            res.render('index', {title: 'Food Delivery', data: response.data});
    })
    .catch(error => {
            console.log(error);
    });
});

module.exports = router;
