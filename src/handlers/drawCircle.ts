import { mouse, left, right, up, down, Button, Point } from '@nut-tree/nut-js';
import { Coordinate } from 'types/interfaces';

export const drawCircle = async (cmd: string, args: string) => 
{ 
  let coord: Coordinate = await mouse.getPosition();
   await mouse.setPosition(new Point(coord.x + +args, coord.y))
   for (let i = 0; i <= 360; i+=15) {
    const rad = i * Math.PI/180
    await mouse.pressButton(Button.LEFT);
    await mouse.setPosition(new Point(coord.x + (+args * Math.cos(rad)), coord.y + (+args * Math.sin(rad))))
    await mouse.releaseButton(Button.LEFT);
   }
}
