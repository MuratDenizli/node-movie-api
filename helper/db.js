const mongoose=require('mongoose');
module.exports=()=>{

    mongoose.connect('mongodb+srv://movie_user:abcd1234@homecarecluster-4itu1.mongodb.net/movie_api?retryWrites=true&w=majority',{ useNewUrlParser: true });
    mongoose.connection.on('open',()=>{
        console.log('Mongo DB Connected');
    });

    mongoose.connection.on('error',(err)=>{
        console.log('Mongo DB Error:',err);
    });
}