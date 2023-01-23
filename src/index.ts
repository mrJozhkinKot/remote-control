import { httpServer } from './http_server/httpServer';
import { server } from './websocket/wsServer';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

server();


