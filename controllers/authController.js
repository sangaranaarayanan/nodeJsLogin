const { successExecution, errorExecution } = require("../commonModel/logModel");

const authentication = (authRequest, authResponse, next) => {
    let apiEntryTime = new Date();
    let apiName= "authenticate user"; 
    console.log(`[INFO] ${apiName} started at`, apiEntryTime.getTime())
    let userData= authRequest.body;
    console.log( process.env.USER)
    if(userData.user === process.env.USER && userData.pass === process.env.PASS){
        console.log("[INFO] User is a valid user we can proceed");
        successExecution(apiName, apiEntryTime, new Date());
        next();
    }else{
        errorExecution(apiName, apiEntryTime, new Date());
        authResponse.status(500).send({
            message:"Unauthorised User get out boiiiii"
        });
    }
}

exports.authenticate = authentication;