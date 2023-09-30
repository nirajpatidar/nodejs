const fs = require('fs');

const requestHandler = (req, res) => {
    // console.log(req.url, req.method, req.headers);
    const { url, method } = req;
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Demo Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>');
        return  res.end();
        
    }
    
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody)
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302; // used this code for redirect location
                res.setHeader('Location', '/');
                return  res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Demo Page</title></head>')
    res.write('<body><h1>Node js server started and respose the content</h1></body>');
    res.end();
}
// module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText: 'Hard code text'
// }
// module.exports.handler = requestHandler;
// module.exports.someText = 'Hard code text';
exports.handler = requestHandler;
exports.someText = 'Hard code text';