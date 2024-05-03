let url = "https://icanhazdadjoke.com/";
let button = document.querySelector("button");
let h3 = document.querySelector("h3");

button.addEventListener("click", async () => {
    let jokes = await getJoke();
    // console.log(joke);
    h3.innerText = jokes.data.joke;
});

async function getJoke() {
    try {
        const config = { headers: { Accept: "application/json" } }; //in configuration we are passing header for specific data.
        let res = await axios.get(url, config);
        console.log(res);
        return res;
    }
    catch (err) {
        console.log("error : ", err);
    }
}
