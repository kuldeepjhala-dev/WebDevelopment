let url = 'https://dog.ceo/api/breeds/image/random';

let button = document.querySelector("button");
let imageContainer = document.querySelector("img");

button.addEventListener("click", async () => {
    let imageUrl = await getImage();
    imageContainer.setAttribute("src", imageUrl);
    // console.log(image);
});

async function getImage() {
    try {
        let res = await axios.get(url);
        console.log(res);
        return res.data.message;
    } catch (e) {
        console.log("error  - ", e);
        imageContainer.setAttribute("alt", "No image found");
        return "No Image found";
    }
}