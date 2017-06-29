# server-cron
Basic Node.js example of a koa server and scheduled jobs running in the same process and using a shared module

## Overview

- index.js requires both the server and cron scheduler.
- server.js starts an http server using koa and binds it to port 3000. It also requires the common module to display a counter's current value
- cron.js kicks off a scheduled task using the `cron` npm module that calls `common.inc()` to increment the counter whose value is displayed in the server

## Usage

`node index.js`

Visiting [http://localhost:3000](http://localhost:3000) will display the most recent value of the counter, which is updated every second.
