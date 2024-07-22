let connection;

//is an input module, thats used for play.js
const setupInput = (conn) => {
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
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };
