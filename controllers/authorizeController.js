const { successExecution } = require("../commonModel/logModel");

const authorizeUser = function(authorizeUserRequest, authorizeUserResponse){
    let apiEntryTime = new Date();
    let apiName= "authorise user"; 
    console.log(`[INFO] ${apiName} started at`, apiEntryTime.getTime());
    
    data=[1,1,1];
    data.map((data)=> console.log(data));
    
    successExecution(apiName,apiEntryTime, new Date());
    
    authorizeUserResponse.status(200).send({
        data:"hi da"
    });
}


exports.authorizeUser = authorizeUser