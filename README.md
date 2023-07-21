# Complete_Responsive_Dynamic_Website  
This project uses HTML, B5, NodeJS, ExpressJS, MongoDB & Mongoose.  
### Libraries and requirements  
run the following commands to install libraries  
-npm i mongoose  
-npm i express  
-npm i hbs  
-npm i bootstrap  
-npm i jquery    
### connect mongoose  
-create a new project in Mongoose  
-After that click on connect   
![image](https://github.com/kkamal2003/Complete_Responsive_Dynamic_Website/assets/126082752/3f80c913-f13a-4a5b-911d-496133425e28)  
-Select option Compass  
![image](https://github.com/kkamal2003/Complete_Responsive_Dynamic_Website/assets/126082752/4d61ff1b-fc26-4d86-a1c0-974b7d92d2c8)
-copy the connection string 
![image](https://github.com/kkamal2003/Complete_Responsive_Dynamic_Website/assets/126082752/e4cdc702-87ce-4b9e-a610-2355d748e93e)  

  
**-paste the following link in the conn.js file in the following line**    

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

### To run 
npm run dev
