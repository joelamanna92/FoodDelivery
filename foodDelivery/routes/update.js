var express = require('express');
const axios = require('axios');

var router = express.Router();

/* GET home page. */
router.post('/:orderid', function (req, res, next) {
    let orderId = req.params.orderid;
    let updateDetails = {
        "humidity" : req.body.humidity,
        "location" : req.body.location,
        "temperature" : req.body.temperature
    };
    let url = `https://kgng8eutc9.execute-api.us-west-2.amazonaws.com/orders/${orderId}`;

    console.log(url);
    console.dir(updateDetails);
    axios
        .post(url, updateDetails)
        .then(response => {
            console.log(response.data);
            // res.render('order', {title: 'Order', data: response.data});
            res.redirect(`/orders/${orderId}`);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
