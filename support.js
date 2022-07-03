const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text.html')
    console.log(req.url)
    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString())
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        const data = fs.readFileSync('about.html');
        res.end(data.toString())
    }
    else if (req.url == '/contact') {
        res.statusCode = 200;
        res.end('<h1> This is contact page</h1>')
    }

    else {
        res.statusCode = 404;
        res.end('<h1>Page not found</h1>');
    }
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});
