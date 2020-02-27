const os = require('os');
const util = require('util');

const cpus = util.promisify(os.cpus);
const totalmem = util.promisify(os.totalmem);

async function checkSystem(){
    try{
        console.log(`Checking your system…`);
        const result = await new Promise((resolve,reject) =>{

            if ( cpus() < 2){
                reject(`Processor is not supported`);
            }else if ( totalmem() < 4,294,965,096 ){ 
                reject(`This app needs at least 4 GB of RAM`);
            }else{
                resolve(`System is checked successfully.`);
            }
        });
        console.log(result);
       
    }catch(e){
        console.error(e);
    }
        
}
checkSystem();