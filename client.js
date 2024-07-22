const net = require("net");
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  //once connection is estlablished sends string saying connected!
  conn.on("connect", () => {
    console.log("Connnected to the server!");
  });
  //send our player username to the server
  conn.on("connect", () => {
    console.log("Sending my name your way!");
    conn.write("Name: LOL");
  });

  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });

  //turns data into readable txt
  conn.setEncoding("utf-8");
  //handles events, and in our case handles the data the snake game outputs when you idle too long
  conn.on("data", (data) => {
    console.log("Server say:", data);
  });

  return conn;
};
module.exports = { connect };
