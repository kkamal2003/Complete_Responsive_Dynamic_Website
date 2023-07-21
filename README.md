# Complete_Responsive_Dynamic_Website  
This project uses HTML, B5, NodeJS, ExpressJS, MongoDB & Mongoose.  
### Libraries and requirements  
run the following commands to install libraries  
- npm i mongoose  
- npm i express  
- npm i hbs  
- npm i bootstrap  
- npm i jquery    
### connect mongoose  
- create a new project in Mongoose  
- After that click on connect on cluster0 on Data services page.   
![image](https://github.com/kkamal2003/Complete_Responsive_Dynamic_Website/assets/126082752/3f80c913-f13a-4a5b-911d-496133425e28)  
- Select option Compass  
![image](https://github.com/kkamal2003/Complete_Responsive_Dynamic_Website/assets/126082752/4d61ff1b-fc26-4d86-a1c0-974b7d92d2c8)
- copy the connection string 
![image](https://github.com/kkamal2003/Complete_Responsive_Dynamic_Website/assets/126082752/e4cdc702-87ce-4b9e-a610-2355d748e93e)  

  
- **paste the following link in the conn.js file in the following line**    

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

## Website preview  
![image](https://github.com/kkamal2003/Complete_Responsive_Dynamic_Website/assets/126082752/5723d4a6-0cbd-4011-971d-b745cb0b3a2b)  

## How to access data that is submitted using contact us form  
- On Data services Page on your project, click on Cluster0.
![image](https://github.com/kkamal2003/Complete_Responsive_Dynamic_Website/assets/126082752/35f8b758-711d-418a-ad04-c4b214e841f6)  
- Click on Collections to view all the queries that are submitted.  
![image](https://github.com/kkamal2003/Complete_Responsive_Dynamic_Website/assets/126082752/e15c9752-13d7-42a8-b9a2-3f4adeaea6d1)
- Data will be viewed in json format.  
  
