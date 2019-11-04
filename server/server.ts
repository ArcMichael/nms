import * as http from "http";
import app from "./app";

let currentApp = app.callback();


const PORT: number = Number(8080) || 8080;

const server = http.createServer(currentApp);

server.listen(PORT);