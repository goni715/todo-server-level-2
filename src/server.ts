import mongoose from "mongoose";
import app from "./app";
import config from './config/config'


async function main(){
    try{
       await mongoose.connect(config.database_url as string);
       console.log('database connection success');
       app.listen(config.port, () => {
        console.log(`server listening on port ${config.port}`);
      });
    }
    catch(err){
        console.log(err);
    }
}

main();