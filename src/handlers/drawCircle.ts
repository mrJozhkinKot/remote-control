import { mouse, Button, Point, straightTo } from '@nut-tree/nut-js';
import { Coordinate } from 'types/interfaces';
import internal from 'stream';

export const drawCircle = async (duplex: internal.Duplex, cmd: string, args: string) => 
{ 
  const coord: Coordinate = await mouse.getPosition();
   await mouse.setPosition(new Point(coord.x + +args, coord.y))
   for (let i = 0; i <= 360; i+=10) {
    await mouse.pressButton(Button.LEFT);
    const rad = i * Math.PI/180
    const point = new Point(coord.x + (+args * Math.cos(rad)), coord.y + (+args * Math.sin(rad)))
    await mouse.setPosition(point)
    await mouse.releaseButton(Button.LEFT);
   }
   duplex.write(cmd)
}