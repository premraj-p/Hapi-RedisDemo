const ExampleController = require('../controller/example_controller1');

module.exports = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) =>{
            return h.response({"status":"running"}).code(200)
        }
    },

    // For Mongo Database
    {
        method: "GET",
        path:"/api/student",
        config: ExampleController.getAllstudent
    },
    
    {
        method: "GET",
        path:"/api/student/{id}",
        config: ExampleController.getOnestudent
    },
    
    {
        method: "POST",
        path: "/api/student",
        config: ExampleController.addstudent
    },

    {
        method: "PUT",
        path: "/api/student/{id}/{name}/{branch}/{address}/{contact}",
        config: ExampleController.updatestudent
    },

    {
        method: "DELETE",
        path: "/api/student/{id}",
        config: ExampleController.deletestudent
    },

    
]