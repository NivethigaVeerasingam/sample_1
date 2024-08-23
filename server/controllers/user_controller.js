
const User= require("../models/user_model");


const user_view_details = async (req, res) => {
    try{
    const user_view = await User.find(req.body);
    res.status(200).json(user_view);

    } catch(error){
        res.status(500).json({message:error.message});
    }
  }

  module.exports={user_view_details

    }
