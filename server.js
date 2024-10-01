require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const testRoutes = require("./routes/testRouter");
const testMomentRoutes = require("./routes/testMomentRouter");
mongoose.set('strictQuery', false);

//express app created
const app = express();
const server = require("http").createServer(app);

// socket.io and then i added cors for cross origin to localhost only
const io = require("socket.io")(server, {
  cors: {
    origin: "*", //specific origin you want to give access to,
  },
});


const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

//middle vware
app.use(express.json()); //post coming request data checks
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// Cấu hình Express để truy cập các tệp trong thư mục public
app.use('/image', express.static('public/image'));


app.use("/api/user", userRoutes);
app.use("/api/test", testRoutes);
app.use("/api/test-moment", testMomentRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //listen for requests
    server.listen(process.env.PORT, () => {
      console.log(`Listening to port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
