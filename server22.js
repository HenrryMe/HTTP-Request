import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    let name;
    if (queryObject.name) {
        name = queryObject.name;
    } else {
        name = 'Guest';
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: `Hello, ${name}!` }));
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
