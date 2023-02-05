import collection from "$lib/collection";
import { curLat, curLon } from './stores.js';
export async function post(image: string) {
    console.log("Uploading")
    await collection.insertOne({ Name: "Johnathan Doeseph", Caption: "Image", ImgFile: image, lad: curLat, lon: curLon, dateadded: (new Date()).toString() });
    console.log("Uploaded")
    console.log(curLat.toString())
    console.log(curLon.toString())
    console.log((new Date).toString())
};