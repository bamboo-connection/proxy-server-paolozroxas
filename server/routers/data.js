var express = require('express');
var router = express.Router();
//this router deals with /api/restaurants

router.get('/:id/sidebar', (req, res) => {
  res.redirect('http://localhost:3003/api/restaurants/' + req.params.id + '/sidebar');
});

router.get('/:id/overview', (req, res) => {
  res.redirect('http://localhost:3002/api/restaurants/' + req.params.id + '/overview');
});

module.exports = router;
