//importing libraries which will be used for required task
const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");


//function to get user by his id
async function userById(id) {

    const user = await csv().fromFile("users.csv");
    // matching the ids of all users to our required id
    user.forEach((element)=>{
        if(element.id==id){
            console.log(element)
        }
    })

};

const id="8046";
userById(id)