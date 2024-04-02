const {constants} = require("../constants")

const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode ?  response.statusCode: 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR: response.json({
            title: "validation failed",
            message: error.message,
            stackTrace: error.stack
        });
        break;
        case constants.UNAUTHORIZED: response.json({
            title: "unauthorized access",
            message: error.message,
            stackTrace: error.stack
        });
        break;
            case constants.FORBIDDEN: response.json({
            title: "forbidden",
            message: error.message,
            stackTrace: error.stack
        });
        break;
        case constants.NOT_FOUND: response.json({
            title: "not found",
            message: error.message,
            stackTrace: error.stack
        });
        break;
        case constants.NOT_FOUND: response.json({
            title: "server error",
            message: error.message,
            stackTrace: error.stack
        });
        break;
        default: console.log("No error found");
    }
    response.json({message : error.message, stactTrace: error.stack})
}

module.exports = errorHandler;