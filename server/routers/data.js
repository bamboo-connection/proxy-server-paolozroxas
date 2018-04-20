var express = require('express');
var router = express.Router();
//this router deals with /api/restaurants

router.get('/:id/gallery', (req, res) => {
  res.redirect('http://54.177.255.219:3001/api/restaurants/' + req.params.id + '/gallery');
});

router.get('/:id/overview', (req, res) => {
  res.redirect('http://54.177.255.219:3002/api/restaurants/' + req.params.id + '/overview');
});

router.get('/:id/sidebar', (req, res) => {
  res.redirect('http://54.177.255.219:3003/api/restaurants/' + req.params.id + '/sidebar');
});

router.get('/:id/recommendations', (req, res) => {
  res.redirect('http://54.177.255.219:3004/api/restaurants/' + req.params.id + '/recommendations');
});



module.exports = router;
