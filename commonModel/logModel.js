exports.successExecution= (apiName,apiEntryTime,apiExitTime) =>{
    console.log(`[INFO] ${apiName} ended at:`,apiExitTime.getTime());
    console.log("[INFO] Total execution time:", apiExitTime.getTime() - apiEntryTime.getTime(),"ms")
}
exports.errorExecution= (apiName,apiEntryTime,apiExitTime) =>{
    console.log(`[ERROR] ${apiName} ended at:`,apiExitTime.getTime()); 
    console.log("[ERROR] Total execution time:", apiExitTime.getTime() - apiEntryTime.getTime(),"ms")
}