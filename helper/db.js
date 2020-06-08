const mongoose=require('mongoose');
module.exports=()=>{
    mongoose.connect('mongodb://localhost/movie-api',{useMongoClient:true});
    mongoose.connection.on('open',()=>{
        console.log('Mongo DB Connected');
    });

    mongoose.connection.on('error',(err)=>{
        console.log('Mongo DB Error:',err);
    });
}