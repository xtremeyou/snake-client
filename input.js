let connection; //used as a global variable so that both functions can use it
//

//is an input module, thats used for play.js
const setupInput = (conn) => { //passes conn variable to use in play.js
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
//connection is also passed into the function call on the play.js page allow us to use
//the con object which is placed into the input function above.
//this allows us to send controls to the server so we cna move the snek
const handleUserInput = (key) => {
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "i") {
    connection.write("Say: Can't catch me!")
  }

  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };
