const mongoose = require("mongoose");
// mongoose.connect('mongodb://'+config.host+':'+config.port+'/'+config.db)
// mongoose.connect('{compass mongodb connect')
mongoose.connect('paste here',{
    // useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log("connection successfull");
}).catch((error)=>{
    console.log(error);
})

