const cart = ["groceseries", "shirt", "pant", "napkin"];

// orderid => payement => payementId => updatePayementInWallet

function orderid() {
    return new Promise(function (resolve, reject) {
        if (true) {
            resolve("12345");
        }
        else {
            reject("rejected orderid");
        }
    })
}

function payement(orderID) {
    return new Promise(function (resolve, reject) {
        if (true) {
            resolve("Success");
        }
        else {
            reject("Rejected");
        }
    })
}

orderid()
    .then(
        function (orderId) {
            console.log(orderId);
            return orderId;
        }
    )
    .then(
        function (orderId) {
            return payement(orderId);
        }
    ).then(
        function (payementStatus) {
            console.log(payementStatus);
        }
    )
    .catch(
        function (err) {
            console.log(err);
        }
    )

