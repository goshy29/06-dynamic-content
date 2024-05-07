const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// 79. Sharing Data Across Requests and Users
const products = [];


// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  // 84. Converting HTML Files to Pug
  res.render("add-product", {pageTitle: "Add Product", path: "/admin/add-product", formsCSS: true, productsCSS: true, activeAddProduct: true})
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
