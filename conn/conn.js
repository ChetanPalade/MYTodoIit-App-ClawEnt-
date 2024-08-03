const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose.connect("mongodb+srv://cwpalade97:OzsaLP4Rps301K4V@cluster0.tnckoa3.mongodb.net/").then(() => {
        console.log("CONNECTED");
    });
    
  } catch (error) {
    res.status(400).json({
        message: "NOT CONNECTED",
    });
  };
};
conn();