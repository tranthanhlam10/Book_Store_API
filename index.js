const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");  
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");




app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));   

dotenv.config();  

mongoose.connect(process.env.MONGODB_URL)  .then(() => {
    console.log("Connected to MongoDB successfully!");
})
.catch((error) => {
    console.log("Failed to connect to MongoDB:", error);
});


// Routes
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);


// chay o port 8000
app.listen(8000, function() {
    console.log("Server is running...");
}) 
