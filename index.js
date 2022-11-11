//importing libraries which will be used for required task
const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");

//pointer for limiting the setInterval
let i=0;

const url='https://random-data-api.com/api/v2/users';

//function to get data of users from url provided
async  function fetching(url){
    const response = await fetch(url);
    var data = await response.json();
    
    console.log(data);
    
    var userInCSV =  await new Parser({ fields: ["id", "uid", "first_name", "last_name","username", "email", "avatar", "gender"] }).parse(data);
    
    fs.appendFile("users.csv", userInCSV ,()=>{
       
    });
    
}

// setInterval function so that data is fetched with an interval of 1sec
 var intervalID=setInterval(()=>{
        
        fetching(url);
        i++;
        if(i>10) clearInterval(intervalID)
        
        ,1000})

    


