import http from 'http';
import fs from 'fs';

const routeMap = {
    "/" : "./home.html",
    "/projects" : "./projects.html",
    "/about" : "./about.html",

}

let projects = [];

http.createServer((req, res) => {
    fs.readFile(routeMap[req.url], (error, data) => {
            res.write(data);
            res.end();
    })
}).listen(8000, () => {
    console.log("Server listening to Port:8000");
})

