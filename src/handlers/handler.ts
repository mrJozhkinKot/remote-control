import { MOUSE_UP, MOUSE_LEFT, MOUSE_RIGHT, MOUSE_DOWN, DRAW_RECTANGLE, DRAW_SQUARE, DRAW_CIRCLE, MOUSE_POSITION, PRNT_SCRN } from "./commands"
import { drawRectangle } from "./drawRectangle";
import { drawSquare } from "./drawSquare";
import { drawCircle } from "./drawCircle";
import { getMousePosition } from "./getMousePosition";
import { printScreen } from "./printScreen";
import internal from "stream";
import { moveMouse } from "./moveMouse";


export const handler = (duplex: internal.Duplex, cmd: string, args: string) => {
  const width: string = args[0] || null
  const length: string = args[1] || null

  switch (cmd) {
    case MOUSE_POSITION: getMousePosition(duplex, cmd)
    break
    case MOUSE_UP: moveMouse(duplex, cmd, args)
    break 
    case MOUSE_LEFT: moveMouse(duplex, cmd, args)
    break 
    case MOUSE_RIGHT: moveMouse(duplex, cmd, args)
    break 
    case MOUSE_DOWN: moveMouse(duplex, cmd, args)
    break 
    case DRAW_RECTANGLE: drawRectangle(duplex, cmd, length, width)
    break 
    case DRAW_SQUARE: drawSquare(duplex, cmd, width)
    break
    case DRAW_CIRCLE: drawCircle(duplex, cmd, args)
    break
    case PRNT_SCRN: printScreen(duplex, cmd)
    break
  }
}

