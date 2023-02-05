import collection from "$lib/collection";
import type { Pin } from "$lib/pin";
export async function load() {
  const pinboard = await collection.find().toArray()
  // console.log(pinboard)
  // pinboard[0]._id = pinboard[0]._id.valueOf()
  const pinboard2: Array<Pin> = [];
  for (let i = 0; i < pinboard.length; i++) {
      let doc: Pin = { id: "", Name: "", Caption: "", ImgFile: "", Lat: "", Lon: "", dateadded: "" };
      doc.id = pinboard[i]._id.toString();
      doc.Name = pinboard[i].Name;
      doc.Caption = pinboard[i].Caption;
      doc.ImgFile = pinboard[i].ImgFile;
      doc.Lat = pinboard[i].Lat;
      doc.Lon = pinboard[i].Lon;
      doc.dateadded = pinboard[i].dateadded;
      pinboard2.push(doc);
  }
  // console.log(pinboard2)
  console.log("Got pinboard")
  return {
    data: { pinboard2 }
  }
}