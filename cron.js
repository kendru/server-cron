const common = require('./common')
const cron = require('cron')
const { CronJob } = cron;

new CronJob('* * * * * *', function() {
  common.inc();
}, null, true);