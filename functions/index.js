const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.VITE_STRIPE_KEY);
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "successful" });
// });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "successful",
  });
});

app.post("/payment/create", async (req, res) => {
  console.log(req);
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    res.status(201).json({
        clientSecret: paymentIntent.client_secret,
    })
  } else {
    res.status(403).json({
        message: "You have to create an item"
    })
  }
});
exports.api = onRequest(app);
// exports.api = functions.https.onRequest(app);