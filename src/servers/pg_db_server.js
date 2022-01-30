
const {Pool,Client}=require('pg');

const client = new Pool({
    port:5432,
    host:'localhost',
    user:'postgres',
    password:'myPassword',
    database:'postgres'
});

client.connect();

client.on("end",()=>{
    console.log('Database disconnected');
})

// client.query('select * from student_table' ,(err , result)=>{
//          if(!err){
//              console.log(result.rows);
//          }
//          client.end();
// });

exports.module=client;



