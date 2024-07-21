const net = require("net");
const connect = () => {
    const conn = net.createConnection({
      host: "localhost",
      port: 50541
    });
    conn.setEncoding("utf-8");
    //handles events, and in case handles the data the snake game outputs when you idle too long
    conn.on("data", (data) => {
      console.log("Server say:", data)
  })
  
  
    return conn;
  };
  module.exports = connect;
