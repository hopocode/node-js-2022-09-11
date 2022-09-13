import { join } from 'path';
import { createServer, IncomingMessage, ServerResponse } from 'http';

// const infoLogFilename: string = join(__dirname, "log/info.log");

// console.log(infoLogFilename);

// const u = 1;

// if (u) {
// }

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.setHeader('content-type', 'text/html');
        res.end('<h1>WELCOME</h1>');
    } else if (req.url === '/users') {
        const users = [
            {
                name: 'Pepa',
                surname: 'Novak',
            },
            {
                name: 'Pepa',
                surname: 'Novak',
            },
        ];
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(users));
    }
    //res.send('ddd');
    res.end('');
});

server.listen(3500, () => {
    console.log('Server start');
});
