const http = require("http");
const fs = require("fs");
const url=require("url");


const myServer = http.createServer((req, res) => {
    if(req.url=='/favicon.ico') return res.end();
    const log = `${Date.now()}:${req.method} ${req.url} New Req Received\n`;
    const myurl=url.parse(req.url);
     
    fs.appendFile("log_httpmethods.txt", log, (err, data) => {
        if (err) console.error("Error writing to log file:", err);
    });

    switch (req.url) {
        case "/":
            res.end("HomePage1");
            break;
        case "/about":
            res.end("I am Riyush Garg");
            break;
        case "/signup":
            if(req.method=="GET")
            {
                res.end("this is signup form");
            }
            else if (req.method=="POST")
            {
              //dbquery run hogi aur phir anwer mil jauega
             res.end("succesful dbquery");
            }
        default:
            res.end("404 Not Found");
    }
});

myServer.listen(5000, () => console.log("Server Started!"));
