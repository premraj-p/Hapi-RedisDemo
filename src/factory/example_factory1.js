const   Response            = require('../utils/response'),
        ResponseMessage     = require('../utils/responseMessages'),
        StatusCode          = require('../utils/statusCodes'),
        Constant            = require('../utils/constants'),
        to                  = require('../utils/promise_handler'),
        studentListStore      = require('../models/example_model1');

//const  client=require('../servers/pg_db_server.js').module;
const  client = require('../servers/redis_db_server').module;

// For Database 
exports.getAllstudent = async (request, reply)=>{
    try{
        console.log(client);
        //let studentList = await studentListStore.find();
        
        var students= await client.query('select * from student');
        return reply.response(Response.sendResponse(true,students, ResponseMessage.SUCCESS, StatusCode.OK));
        //console.log(students);
    }catch(error){
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}



exports.getOnestudent = async(request, reply)=>{
    try{
        //let itemList = await ItemListStore.create(request.payload);
        //let studentList = await studentListStore.findById(request.params.id);
        var students= await client.query('select * from student where id=$1 ',[request.params.id]);
        return reply.response(Response.sendResponse(true,students, ResponseMessage.SUCCESS, StatusCode.OK));

       // return reply.response(Response.sendResponse(true, studentList, ResponseMessage.SUCCESS, StatusCode.OK));
    }catch(error){
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}

exports.addstudent = async (request, reply) =>{
    try{
        console.log(request.body);
        
        //Redis
        //await client.set(request.body.username,request.body.password);
        return reply.response(Response.sendResponse(true, [{SUCCESS:true}], ResponseMessage.SUCCESS, StatusCode.CREATED));



      // let studentList = await studentListStore.create(request.payload);
        //console.log('*************',request.payload);
        
        //postgres code
        // client.query(`insert into student(name,id,branch,address,contact)values($1,$2,$3,$4,$5)`,[request.payload.name,request.payload.id,request.payload.branch,request.payload.address,request.payload.contact],(err , result)=>{
        //  if(err){
        //      console.log(err);
        //  }
        //  console.log(result.rows)
        // });
        //return reply.response(Response.sendResponse(true, [{SUCCESS:true}], ResponseMessage.SUCCESS, StatusCode.CREATED));
    
    }catch(error){
        console.log('ERROR.......',error);
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}

exports.updatestudent = async(request, reply)=>{
    try{
        console.log(request.body,'*******',request.params.id);
        // let itemList = await ItemListStore.findByIdAndUpdate({_id:request.params.id}, request.payload, function(err,prod) {
        //     if(err)
        //     {
        //         console.log(err);
        //     }
        //     else{
        //         console.log(prod);
        //     }
        // });
        //let studentList = await studentListStore.findByIdAndUpdate(request.params.id, request.payload, {new: true});
        var students= await client.query('update student set name=$1,branch=$2,address=$3,contact=$4 where id=$5',[request.params.name,request.params.branch,request.params.address,request.params.contact,request.params.id]);
        return reply.response(Response.sendResponse(true,students, ResponseMessage.SUCCESS, StatusCode.OK));

        
        //console.log(studentList);
        //return reply.response(Response.sendResponse(true, studentList, ResponseMessage.SUCCESS, StatusCode.OK));
    }catch(error){
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}

exports.deletestudent = async(request, reply)=>{
    try{
       // let studentList  = await studentListStore.findByIdAndDelete(request.params.id);
        var students= await client.query('delete from student where id=$1 ',[request.params.id]);

        return reply.response(Response.sendResponse(true, students, ResponseMessage.SUCCESS, StatusCode.OK));
    }catch(error){
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}
