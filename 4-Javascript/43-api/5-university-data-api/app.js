let url = "http://universities.hipolabs.com/search?country=";
let country;
let button = document.querySelector("button");

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res;
    }
    catch (err) {
        console.log("error: ", err);
    }
}

button.addEventListener("click", async () => {
    let input = document.querySelector("input").value;
    country = input;
    let collegeData = await getColleges(country);
    showData(collegeData.data);
});

function showData(collegeArr) {
    let list = document.querySelector("#list"); list.innerText = "";
    console.log(collegeArr)
    for (college of collegeArr) {
        console.log(college); 
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}
   