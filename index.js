const express = require("express");
const app = express();
app.use(express.json());

const rooms = [];
const bookedRooms = [];
app.post("/new", (req, res) => {
  res.json({
    message: "Room has been Registered Successfully",
    roomDetails: req.body,
  });
  rooms.push(req.body);
});

app.post("/book", (req, res) => {
  let room = rooms.find((el) => el.roomId == req.body.roomId);
  if (room) {
    res.json({
      message: `Room ID ${req.body.roomId} been booked Successfully`,
      bookDetails: req.body,
    });
    rooms.splice(rooms.indexOf(room), 1);
    bookedRooms.push(req.body);
  } else {
    res.json({ message: "Room Not available" });
  }

  //bookedRooms.push(req.body);
});

app.get("/available", (req, res) => {
  res.json(rooms);
});

app.get("/occupied", (req, res) => {
  res.json(bookedRooms);
});

app.listen(3001, () => {
  console.log("Port Listening at 3001");
});
