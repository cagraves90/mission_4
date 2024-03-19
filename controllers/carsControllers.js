// const express = require("express");
// const app = express();
// // const cors = require("cors");
const mongoose = require("mongoose");
// ---------------------------------------------- MongoDB Schema Creation ----------------------------------------------

require("../models/carsSchema");

const CarDetails = mongoose.model("Cars");

// ---------------------------------------------- Endpoints ----------------------------------------------
module.exports.getAllCars = async (req, res) => {
  try {
    await CarDetails.find().then((data) => {
      return res.status(200).json({ status: "ok", data: data });
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getCarModel = async (req, res) => {
  try {
    const { model } = req.params;
    await CarDetails.find({ model: model }).then((data) => {
      return res.status(200).json({ status: "ok", data: data });
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// module.exports.getCarYear = async (req, res) => {
//   try {
//     const { year } = req.params;
//     await CarDetails.find({ year: year }).then((data) => {
//       return res.status(200).json({ status: "ok", data: data });
//     });
//   } catch (error) {
//     return res.status(500).json({ message: "Server error" });
//   }
// };
