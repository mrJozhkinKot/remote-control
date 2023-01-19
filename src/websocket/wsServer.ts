import { WebSocket, WebSocketServer } from 'ws';
import { handler } from '../handlers/handler';


export const server = () => {
  const wss = new WebSocketServer({
    port: 8080,
  });
  console.log('Server is connected');


  wss.on('connection', async (ws) => {
    console.log(`New client connected!`);
    const duplex = WebSocket.createWebSocketStream(ws, { encoding: 'utf-8', decodeStrings: false})

    ws.on('message', (data) => {
      console.log('received:', data);
    });
  
    for await (const chunk of duplex) {
      const [command, ...args] = chunk.split(' ');
      console.log(`Send command ${chunk}, args: ${args} `)
      try {
        handler(duplex, command, args)
      } catch (error) {
        console.log(error)
      }
    }
 
    ws.on('close', () => {
      console.log(`Client is disconnected!`);
      duplex.destroy();
    });
  });

};
