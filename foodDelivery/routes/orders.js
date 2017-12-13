var express = require('express');
const axios = require('axios');

var router = express.Router();

/* GET home page. */
router.get('/:orderid', function (req, res, next) {
    let orderId = req.params.orderid;

    let url = `https://kgng8eutc9.execute-api.us-west-2.amazonaws.com/orders/${orderId}`;
    axios
        .get(url)
        .then(response => {
            console.log(response.data);
            res.render('order', {title: 'Order', data: response.data});
        })
        .catch(error => {
            console.log(error);
        });
});

router.post('/', function (req, res, next) {
    let orderId = req.params.orderid;
    let newOrder = {
        "customer_name" : req.body.customername,
        "credit_card_info": req.body.creditcardinfo,
        "shipping_address" : req.body.shippingaddress,
        "telephone_number" : req.body.telephonenumber,
        "product_number" : req.body.productnumber
    };
    let url = 'https://kgng8eutc9.execute-api.us-west-2.amazonaws.com/orders/';
    axios
        .put(url, newOrder)
        .then(response => {
            console.log(response.data);
            res.redirect(`/orders/${response.data.order_id}`);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
