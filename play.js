

const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  conn.setEncoding("utf-8");
  
  conn.on("data", (data) => {
    console.log("Server say:", data)
})

  return conn;
};
//The .on method lets you specify an event name and a function that does something when that event happens.
// conn.on("event name", () => {
//   code that does something
//   });

console.log("Connecting ...")
connect()


