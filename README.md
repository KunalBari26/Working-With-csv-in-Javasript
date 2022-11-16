### This is an assignment where the objective was to work with csv files

#### index.js
In index.js the program will fetch  data of random users from the api url given as soon as the program runs . It will get the data exactly within an interval of 1 sec and for limiting the setInterval function I have initially fetched data of only 10 users.
It will then write the data so fetched in a  csv file named users.csv in a comma seperated format. I have used fs.appendFile() so that data is not overwritten.

#### userbyId.js
In userbyId.js , the program will fetch and display all the details of an user by his id.The details thus fetched are from our previously created users.csv . I have hardcoded the value for id in the program as for development but we can make it as input.

#### sortingUser.js
In sortingUser.js , the program will get all the users from users.csv , sort them based on their id and write thus sorted users info in an another file named as user-sorted.csv
