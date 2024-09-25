const express = require("express");
const router = express.Router();

texto = [];

router.get("/home", (req, res, next) => {
  res.render("home", { pageTitle: "adicionar nota" });
});

router.post("/home", (req, res, next) => {
  if (req.body.addNota == "") {
    res.redirect("/home");
  } else {
    texto.push({ nomeNota: req.body.addNota });
    res.redirect("/home");
    console.log(texto);
  }
});

module.exports = router;
