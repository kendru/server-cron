const http = require('http')
const prom = require('prom-client')
const common = require('./common')

// Probe every 10 seconds.
prom.collectDefaultMetrics({ timeout: 10000 });

const server = http.createServer((req, resp) => {
    console.log('req.url', req.url);
    if (req.url === '/metrics') {
        resp.end(prom.register.metrics())
    } else {
        resp.statusCode = 404;
        resp.end();
    }
})

server.listen(3001, () => {
    console.log('Metrics server listening on port 3001')
})