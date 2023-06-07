import http from 'http';
import fs from 'fs';

const reqhandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url == "/") {
        fs.readFile("./home.html", (error, data) => {
            res.write(data);
            res.end();
        });
    } else if (url == "/projects") {
        fs.readFile("./projects.html", (error, data) => {
            res.write(data);
            res.end();
        });
    } else if (url == "/about") {
        fs.readFile("./about.html", (error, data) => {
            res.write(data);
            res.end();
        });
    } else if (url == "/add" && method == "POST") {
        const title = req.body;
        console.log(title);
    }
}

const server = http.createServer(reqhandler);

server.listen(8000, () => {
    console.log("Server listening to Port:8000");
});

// const routeMap = {
//     "/" : "./home.html",
//     "/projects" : "./projects.html",
//     "/about" : "./about.html",

// }

// http.createServer((req, res) => {
//     fs.readFile(routeMap[req.url], (error, data) => {
//             res.write(data);
//             res.end();
//     })
// }).listen(8000, () => {
//     console.log("Server listening to Port:8000");
// })

