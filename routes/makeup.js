const express = require("express");
const router = express.Router();
const makeup = require("../model/products.json");

// localhost:4500/makeup
router
  .get("/", (req, res) => {
    const { brand } = req.query;
    if (brand) {
      const filtered = makeup.filter((item) => item.brand === brand);
      return res.send(filtered);
    }
    res.send(makeup);
  })
  .get("/:id", (req, res) => {
    const { id } = req.params;
    if (brand) {
      const filtered = makeup.filter((item) => item.id === id);
      return res.send(filtered);
    }

    res.send(makeup);
  });

module.exports = router;
