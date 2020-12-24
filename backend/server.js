var app = require("express")();
var http = require("http");
var cors = require("cors");
app.use(cors());
var server = http.createServer(app);
var io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    console.log(msg);
    socket.broadcast.emit("message-broadcast", msg);
  });
});

app.get("/", (req, res) => res.send("hello!"));
server.listen(3000, () => {
  console.log("listening on *:3000");
});
