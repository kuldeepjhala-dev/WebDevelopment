function oddEvenRequest(request) {
    if (request == "odd") {
        function odd(n) {
            console.log(!(n % 2 == 0));
        }

        return odd;
    }
    else if (request == "even") {
        return function (n) {
            console.log((n % 2 == 0));
        }
    }
    else {
        console.log("Wrong request");
    }
}

const storeOddfun = oddEvenRequest("odd");
storeOddfun(3); //op: true
storeOddfun(2); //op: false
const storeEvenfun = oddEvenRequest("even");
storeEvenfun(2); //op: true
storeEvenfun(3); //op: false