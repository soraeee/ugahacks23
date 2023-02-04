import { MongoClient } from "mongodb"
console.log("Connecting to db")
const uri = "mongodb+srv://jwaryold:GSoCm86fud47qQRu@cluster0.gmvycnv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { });
await client.connect()

console.log("Connected to db pinboard")
export default client.db('pinboard') // select database