const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    if(req.url=='/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        if (err) console.error("Error writing to log file:", err);
    });

    switch (req.url) {
        case "/":
            res.end("HomePage1");
            break;
        case "/about":
            res.end("I am Riyush Garg");
            break;
        default:
            res.end("404 Not Found");
    }
});

myServer.listen(7000, () => console.log("Server Started!"));
