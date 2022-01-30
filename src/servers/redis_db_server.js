const redis = require('redis');


const client = redis.createClient({
    host:'127.0.0.1',
    port:6379,
    password:'mypass'

});

client.connect();

client.on('connect',function(){
    console.log('Connected...');
});

exports.module= client;