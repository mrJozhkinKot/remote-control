import { mouse, Region, screen } from "@nut-tree/nut-js"
import internal from "stream";
import Jimp from "jimp"
import { Coordinate } from "types/interfaces";

export const printScreen = async (duplex: internal.Duplex, cmd: string) => {
  try {
    const coord: Coordinate = await mouse.getPosition();
    const area = new Region(coord.x, coord.y, 200, 200)
    const img = await screen.grabRegion(area)
  
    console.log(img.data)

    const imgJimp = new Jimp(img.width, img.height)
    imgJimp.bitmap.data = img.data;

    const imgStr = await imgJimp.getBase64Async(Jimp.MIME_PNG)
    duplex.write(`${cmd} ${imgStr.split(',')[1]}`)
  } catch (error) {
    console.log(`You can use only main monitor for this command`, error)
  } 
 }
