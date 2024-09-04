const http = require("http")
const fs = require("fs")

const server =http.createServer((req,res)=>{
    switch(req.url){
        case "/":{
            console.log(req.url)
            res.statusCode = 200
            res.setHeader("contenType", "text/html")
            const bufferhtml =fs.readFileSync("./index.html")
            res.end(bufferhtml)
            break;
        }
        case "/home":{
            console.log(req.url)
            res.statusCode = 200
            res.setHeader("contenType", "text/html")
            const bufferhtml =fs.readFileSync("./home.html")
            res.end(bufferhtml)
            break;
        }
        case "/imgr.jpg":{
             console.log(req.url)
            res.statusCode = 200
            res.setHeader("contenType", "image/jpg")
            const bufferimage =fs.readFileSync("./imgr.jpg")
            res.end(bufferimage)
            break;
        }
        case "/imgg.png":{
             console.log(req.url)
            res.statusCode = 200
            res.setHeader("contenType", "image/png")
            const bufferimage2 =fs.readFileSync("./imgg.png")
            res.end(bufferimage2)
            break;
        }
        case "/favicon.ico":{
            console.log(req.url);
            res.statusCode = 200;
            res.setHeader("Content-Type", "image/x-icon");
            const bufferFavicon = fs.readFileSync("./favicon.ico");
            res.setHeader("Content-Length", bufferFavicon.length.toString());
            res.setHeader("Cache-Control", "no-cache");
            res.end(bufferFavicon);
           // break;
        }
        case "/user.json":{
            console.log(req.url);
            res.statusCode = 200;
            res.setHeader("ContenType", "application/json");
            const bufferUserJson = fs.readFileSync("./user.json");
            res.end(bufferUserJson);
            break;
        }
        case "/style.css":{
            console.log(req.url);
            res.statusCode = 200;
            res.setHeader("ContenType", "text/css");
            const bufferStyleCss = fs.readFileSync("./style.css");
            res.end(bufferStyleCss);
            break;
        }
        default:
            console.log("NOT FOUND");
            res.statusCode = 404;
            res.setHeader("ContenType", "text/html");
            const bufferErrorHtml = fs.readFileSync("./404.html");
            res.end(bufferErrorHtml);

    }
});

server.listen(4001, () => {
    console.log(`server running at http://localhost:4001`);
  });