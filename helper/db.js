const mongoose=require('mongoose');
module.exports=()=>{
    
    mongoose.connect('mongodb+srv://movie_user:abcd1234@homecarecluster-4itu1.mongodb.net/movie-api?retryWrites=true&w=majority');
    mongoose.connection.on('open',()=>{
        console.log('Mongo DB Connected');
    });

    mongoose.connection.on('error',(err)=>{
        console.log('Mongo DB Error:',err);
    });
}