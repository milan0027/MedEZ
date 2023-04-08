const User = require("../models/user");
const Item =require("../models/item");
const axios = require('axios');
const start = async(req,res) => {


    try{
        const data = await axios.get("http://localhost:5000/search?name=crocin", {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }},);
          console.log(data.data);
        return res.status(200).json({data: data.data});
    }catch(e){
        return res.status(400).send({ msg: "Server Error" });
    }
}

const submit = async(req,res) => {
    try{
        const userId = req.user.userId;
        const user = await User.findById(userId);

        //user code
        return res.status(200).json({user});
    }catch(e){
        return res.status(400).send({ msg: "Server Error" });
    }
}

module.exports = {start, submit};