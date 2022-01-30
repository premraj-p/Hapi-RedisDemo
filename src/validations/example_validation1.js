const Joi               = require("@hapi/joi"),
      Response          = require('../utils/response'),
      ResponseMessage   = require('../utils/responseMessages'),
      StatusCode        = require('../utils/statusCodes'),
      Constant          = require('../utils/constants'),
      log               = require('logger/logger');
const { optional } = require("@hapi/joi");


module.exports = Object.freeze({
    
    addstudent:{
        payload: {
            name: Joi.string().required().example('Premraj'),
            id:Joi.number().required().example('1'),
            branch: Joi.string().required().example('Computer'),
            address: Joi.string().required().example('Pune'),
            contact: Joi.string().required().example('1234567892'),
            // username:Joi.string().required().example('addsalfj'),
            // password:Joi.string().required().example('addsalfj')

        },
        failAction(request, reply, error) {
            log.error("Payload error:",error)
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },
    getOnestudent:{
        params:{
            id: Joi.string().required().example('25451cdefv'),
        },
       
        failAction(request, reply, error) {
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },
    updatestudent:{
        params:{
            id: Joi.string().required().example('25451cdefv'),
        },
        payload:{
            //name: Joi.string().optional().example('apple'),
            //price: Joi.number().optional().example(10),
            name: Joi.string().required().example('Premraj'),
            id:Joi.string().required().example('1'),
            branch: Joi.string().required().example('Computer'),
            address: Joi.string().required().example('Pune'),
            contact: Joi.string().required().example('1234567892'),
           
        },
        failAction(request, reply, error) {
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },

    deletestudent:{
        params:{
            id: Joi.string().required().example('225451cdefv1'),
        },
        failAction(request, reply, error) {
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },
})