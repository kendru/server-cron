const prom = require('prom-client')

const hist = new prom.Histogram({
    name: 'requests',
    help: 'Request status and timings',
    labelNames: [ 'status_code' ],
});

async function instrumentRequestMonitoring(ctx, next) {
    const start = Date.now()
    await next();
    const durationSeconds = (Date.now() - start) / 1000
    
    hist.observe({ status_code: ctx.status }, durationSeconds)
}

module.exports = instrumentRequestMonitoring