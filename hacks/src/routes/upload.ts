import collection from "$lib/collection";
import { curLat, curLon } from './stores.js';
export async function post({ request }) {
    console.log("Uploading")
    await collection.insertOne({ Name: "Johnathan Doeseph", Caption: "Image", ImgFile: request.body.read(), Lat: curLat, Lon: curLon, dateadded: (new Date()).toString() });
    console.log("Uploaded")
    console.log(curLat.toString())
    console.log(curLon.toString())
    console.log((new Date).toString())
};