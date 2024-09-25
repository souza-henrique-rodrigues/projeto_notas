const express = require("express");
const router = express.Router();

texto = [];

router.get("/home", (req, res, next) => {
  res.render("home");
});

router.post("/home", (req, res, next) => {
  texto.push({ nomeNota: req.body.addNota });
  res.redirect("/home");
  console.log(texto);
});

module.exports = router;
