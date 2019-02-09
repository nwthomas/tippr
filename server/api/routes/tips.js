require("dotenv").config();
const express = require("express");
const route = express.Router();
const stripe = require("stripe")("sk_test_CBZoJ9T5ywCuVR0bDzoQZyIg");
const db = require("../../data/dbConfig");

route.get("/", async (req, res) => {
  try {
    const tips = await db("tips");

    res.status(200).json(tips);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});
route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tip = await db("tips")
      .where({ id })
      .first();
    res.status(200).json(tip);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

// const stripeCharge = async amount => {
//   const charge = await stripe.charges.create({
//     amount: amount,
//     currency: "usd",
//     source: "tok_visa",
//     receipt_email: "jenny.rosen@example.com"
//   });
//   console.log("*******************", charge);
// };
// route.post("/charge", async (req, res) => {
//   const tip = req.body;
//   stripeCharge(tip);
// });

// const token = await stripe.tokens.create({
//   card: {
//     number: "4242424242424242",
//     exp_month: 12,
//     exp_year: 2020,
//     cvc: "123"
//   }
// });

route.post("/charge", async (req, res) => {
  let amount = 500;
  try {
    const customer = await stripe.customers.create({
      email: req.body.email,
      card: "tok_visa"
    });
    console.log("****", customer);
    const charge = await stripe.charges.create({
      amount,
      description: "Sample Charge",
      currency: "usd",
      customer: customer.id
    });
    console.log("charge", charge);
    res.status(200).send(charge);
  } catch (err) {
    console.log(err, "failed");
  }
});

route.post("/", async (req, res) => {
  const newTip = req.body;
  try {
    const result = await db("tips").insert(newTip);

    res.status(201).json({ message: `tip created with the id of ${result}` });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});
route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db("tips")
      .where({ id })
      .del();
    res.status(202).json({ message: "tip deleted", id });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});
module.exports = route;
