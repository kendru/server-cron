const common = require('./common')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
    ctx.body = `the counter is now set to ${common.get()}`
});

app.listen(3000);