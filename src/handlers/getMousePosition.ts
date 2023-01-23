import { mouse } from '@nut-tree/nut-js';
import internal from 'stream';
import { Coordinate } from 'types/interfaces';

export const getMousePosition = async (duplex: internal.Duplex, cmd: string) => {
      const coord: Coordinate = await mouse.getPosition();
      duplex.write(`${cmd} ${coord.x},${coord.y}`)
    }
