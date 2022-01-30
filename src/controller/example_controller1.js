const ExampleValidation   =  require('../validations/example_validation1'),
      ExampleFactory      =  require('../factory/example_factory1'),
      Response            =  require('../utils/response'),
      Joi                 =  require('@hapi/joi');
       

const response_format = Joi.object({
		is_success: Joi.boolean().required(),
		result: Joi.any().optional(),
		message: Joi.string().required(),
		status_code: Joi.number().required(),
	}),
	response = {
		status: {
			200: response_format,
			201: response_format,
			400: response_format,
			500: response_format,
		},
    };
  
// For Mongo Database
exports.getAllstudent = {
    description: "GET example: Get student list from mongo db",
    tags: ['api'],
    plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    handler:(request, h)=>{
        return ExampleFactory.getAllstudent(request, h);
    },
    response
}

exports.getOnestudent = {
  description: "GET example: Get student by id from mongo db",
  tags: ['api'],
  plugins: {
  "hapi-swaggered": {
    responses: Response.responses,
  },
  },
  validate: ExampleValidation.getOnestudent,
  handler:(request, h)=>{
      return ExampleFactory.getOnestudent(request, h);
  },
  response
}

exports.addstudent = {
    description: "POST example: Add a student to the list",
    tags: ['api'],
    plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
   validate: ExampleValidation.addstudent,
    handler:(request, h)=>{
        return ExampleFactory.addstudent(request, h);
    },
    response
}

exports.updatestudent= {
  description: "PUT example updating student",
  tags: ['api'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  },
  validate: ExampleValidation.updateProduct,
  handler: (request, h)=>{
      return ExampleFactory.updatestudent(request, h);
  },
  response
}

exports.deletestudent = {
  description: "Delete example for deleting student",
  tags: ['api'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  },
  validate: ExampleValidation.deletestudent,
  handler: (request, h)=>{
      return ExampleFactory.deletestudent(request, h);
  },
  response
}





