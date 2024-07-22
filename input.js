const { UP, DOWN, LEFT, RIGHT } = require("./constants");
let connection; //used as a global variable so that both functions can use it

//is an input module, thats used for play.js
const setupInput = (conn) => {
  //passes conn variable to use in play.js
  connection = conn;
  const stdin = process.stdin; // create variable to hold the stdin object
  //so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual
  // keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf-8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); //means on
  return stdin; // return the stdin object so we can use it elsewhere in the program
};

//connection.write uses the variable connect at the top of the page
//connection is also passed into the function call on the play.js page, which allows us to use
//the con object which is then placed into the input function above.
//this allows us to send controls to the server so we can move the snek!
const handleUserInput = (key) => {
  if (key === "w") {
    connection.write(UP);
  }

  if (key === "s") {
    connection.write(DOWN);
  }

  if (key === "a") {
    connection.write(LEFT);
  }

  if (key === "d") {
    connection.write(RIGHT);
  }

  if (key === "i") {
    connection.write("Say: You're gonna lose!");
  }

  if (key === "o") {
    connection.write("Say: I'm the best!");
  }

  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };
