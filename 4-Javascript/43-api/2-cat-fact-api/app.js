// let url = 'https://catfact.ninja/fact';
//fetch() function returns a promise
// fetch(url)
//     .then((res) => {
//         //res.json() also returns a promise. In promiseResult key there is an object which contains all the data
//         return res.json()
//     })
//     .then((data) => {
//         console.log("data-1", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log("data-2", data.fact)
//     })
//     .catch((err) => {
//         console.log("err", err);
//     });

//----------------------------------------------------------------------------------------------------------------------------

//shortining above code using async and await
// let url = 'https://catfact.ninja/fact';
// async function getFacts() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);

//     let res3 = await fetch(url);
//     let data3 = await res3.json();
//     console.log(data3.fact);
// }
// getFacts();

//----------------------------------------------------------------------------------------------------------------------------

let url = 'https://catfact.ninja/fact';

let button = document.querySelector("button");
let h1 = document.querySelector("h1");

button.addEventListener("click", async () => {
    let fact = await getFacts();
    h1.innerText = fact;
});

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error  - ", e);
        return "No fact found";
    }
}