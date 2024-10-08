const { MongoClient } = require('mongodb');
const url = "mongodb+srv://kuldeephjhala:lpFBqhgdw5aTTIFe@namastedev1.6r4vy.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    //write
    const data = {
        firstName: "Jay",
        lastName: "Dhobi",
        city: "Vadodara",
        phoneNumber: "9999999999"
    }
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    //Read  
    const findResult = await collection.find({}).toArray();
    console.log("Found Document => ", findResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());