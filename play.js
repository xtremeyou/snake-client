const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect(); //creates a variable out of connect so we can get the conn object and use it inside input.js

setupInput(conn); //uses the object conn we assigned above to use the connection function and connect that to
//the handleuserInoptus function
