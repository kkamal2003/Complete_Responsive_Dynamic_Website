const mongoose = require("mongoose");
// mongoose.connect('mongodb://'+config.host+':'+config.port+'/'+config.db)
// mongoose.connect('{compass mongodb connect')
mongoose.connect('mongodb+srv://kkaurbe21:kkaurbe21@cluster0.hua0jbj.mongodb.net/',{
    // useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log("connection successfull");
}).catch((error)=>{
    console.log(error);
})

