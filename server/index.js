const express = require('express');
const app = express();
require('dotenv').config()

const user_routes = require('./routes/user_route')


const mongoose = require('mongoose');
const User = require("./models/user_model");



// app.get('/', (req, res) => {
//     console.log('Hello, world!');
//     res.send('Hello from theelipan');
//   });
//   app.get('/view', (req, res) => {
//   console.log('Hello, world!');
//   res.send('Nivethiga');
// });

//middleware
app.use(express.json());
app.use("/user",user_routes);




mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
  
 
  // view
    // app.get("/user/view",async (req, res) => {
    //   try{
    //   const user_view = await User.find(req.body);
    //   res.status(200).json(user_view);
  
    //   } catch(error){
    //       res.status(500).json({message:error.message});
    //   }
    // });
  

  


  app.listen(process.env.PORT, () => {
    console.log('Server listening on port');
  });
  
