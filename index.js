const http = require('http');

const server = http.createServer((req, res) => {
    console.log('This is my first message and welcome to KCT learning');

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('This is my first message \nWelcome to KCT learning\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
