import { join } from "path";
import {createServer, IncomingMessage, ServerResponse} from 'http';

// const infoLogFilename: string = join(__dirname, "log/info.log");

// console.log(infoLogFilename);

// const u = 1;

// if (u) {
// }

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.end("Ahoj");
});

server.listen(3500, () => {
    console.log("Server start");
});