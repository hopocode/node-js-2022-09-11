"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
// const infoLogFilename: string = join(__dirname, "log/info.log");
// console.log(infoLogFilename);
// const u = 1;
// if (u) {
// }
var server = (0, http_1.createServer)(function (req, res) {
    res.end("Ahoj");
});
server.listen(3500, function () {
    console.log("Server start");
});
