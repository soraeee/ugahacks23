import collection from "$lib/collection";
import type { Pin } from "$lib/pin";
const pinboard = await collection.find().toArray()
// console.log(pinboard)
// pinboard[0]._id = pinboard[0]._id.valueOf()
const pinboard2: Array<Pin> = [];
for (let i = 0; i < pinboard.length; i++) {
    let doc: Pin = { id: "", Name: "", Caption: "", ImgFile: "", lat: "", lon: "", dateadded: "" };
    doc.id = pinboard[i]._id.toString();
    doc.Name = pinboard[i].Name;
    doc.Caption = pinboard[i].Caption;
    doc.ImgFile = pinboard[i].ImgFile;
    doc.lat = pinboard[i].lat;
    doc.lon = pinboard[i].lon;
    doc.dateadded = pinboard[i].dateadded;
    pinboard2.push(doc);
}
// console.log(pinboard2)
console.log("Got pinboard")
export default {
    data: { pinboard2 }
}