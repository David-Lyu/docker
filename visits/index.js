const express = require('express');
//this is version 3.0.0 of redis. For requires more code and doesn't follow lesson
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  legacyMode: true,
  //usually put in an http(s) address but with docker we do below
  host: 'redis-server',
  //default redis port number
  port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
  //this creates a crash for testing
  //exit 0 says the exit was okay cause we wanted it to
  //anything else is a problem and docker handles it differently depending on code
  process.exit(0);
  client.get('visits', (err, visits) => {
    res.send('Number of visits is' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8080');
});
