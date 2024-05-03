//API
//Api = application programming interface
//Eg: waiter is an api betweeen customer & kitchen.
//user accesses api and api connects to database.
//it works as an interface between user and server.
//http protocol api's are called web-apis.
//api returns data in JSON format.
//api is url, link, endpoint, through which we access data.
//some api's endpoint are normal url, they dont have a key or they are not paid. (key == password)

//JSON
//json = javascript Object notation
//before json XML was used. Similar to html.
//json is not equal to js object
//every key in string in json
//undefined value is invalid in js.
//it has fixed datatype
//below is json doc
//https://www.json.org/json-en.html

//response received from json is in string format.
let jsonResp = '{"fact":"The group of words associated with cat (catt,\u00a0cath,\u00a0chat,\u00a0katze) stem from the Latin\u00a0catus, meaning domestic cat, as opposed to\u00a0feles, or wild cat.","length":147}';

//to conver json string to js object we use JSON.parse(data) method.
let validResoponse = JSON.parse(jsonResp);

console.log(validResoponse);
console.log(validResoponse.fact, validResoponse.length);


//js object
let student = {
    name: "kuldeep",
    age: 21
}
//to convert js object into json we do using JSON.stringify(js-object)
let jsonConverted = JSON.stringify(student);

console.log(jsonConverted);