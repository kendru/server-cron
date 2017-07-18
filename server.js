const common = require('./common')
const instrumentRequestMonitoring = require('./instrumentRequestMonitoring')
const Koa = require('koa')
const app = new Koa()

app.use(instrumentRequestMonitoring)

app.use(ctx => {
    ctx.body = `the counter is now set to ${common.get()}`
});

app.listen(3000, () => {
    console.log('Application server listening on port 3000')
});