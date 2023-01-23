import { mouse, Point } from '@nut-tree/nut-js';
import internal from 'stream';
import { Coordinate } from 'types/interfaces';

export const moveMouse = async (duplex: internal.Duplex, cmd: string, args: string) => {
      const coord: Coordinate = await mouse.getPosition();
      const mouseDirection: string = cmd.split('_')[1]
      switch (mouseDirection) {
        case 'up': {
          mouse.setPosition(new Point(coord.x, coord.y - +args))
        }
        break
        case 'left': {
          mouse.setPosition(new Point(coord.x - +args, coord.y))
        }
        break
        case 'right': {
          mouse.setPosition(new Point(coord.x + +args, coord.y))
        }
        break
        case 'down': {
          mouse.setPosition(new Point(coord.x, coord.y + +args))
        }
        break
      }  
      duplex.write(cmd)
    }
