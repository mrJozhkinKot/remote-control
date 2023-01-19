import { mouse, left, right, up, down, Button } from '@nut-tree/nut-js';
import internal from 'stream';

export const drawSquare = async (duplex: internal.Duplex, cmd: string, width: string) => 
{ 
  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(+width));
  await mouse.move(up(+width));
  await mouse.move(right(+width));
  await mouse.move(down(+width))
  await mouse.releaseButton(Button.LEFT);
  duplex.write(cmd)
}