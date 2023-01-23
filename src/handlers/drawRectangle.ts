import { mouse, left, right, up, down, Button } from '@nut-tree/nut-js';
import internal from 'stream';

export const drawRectangle = async (duplex: internal.Duplex, cmd: string,  length: string, width: string) => 
{ 
  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(+length));
  await mouse.move(up(+width));
  await mouse.move(right(+length));
  await mouse.move(down(+width))
  await mouse.releaseButton(Button.LEFT);
  duplex.write(cmd)
}
