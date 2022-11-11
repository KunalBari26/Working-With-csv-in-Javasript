//importing libraries which will be used for required task

const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");

async function sortUser() {
    //getting users from our csv file
    const user = await csv().fromFile("users.csv");

    //sorting users based on their id
    user.sort((a,b)=>a.id-b.id);
    
    
    console.log(user);
   //appending the sorted users in a new csv file
    user.forEach(async (element)=>{
        var userInCSV =  await new Parser({ fields: ["id", "uid", "first_name", "last_name","username", "email", "avatar", "gender"] }).parse(element);
        fs.appendFile("users-sorted.csv", userInCSV ,()=>{
            // console.log("success")
         });
    })
   
};


sortUser()