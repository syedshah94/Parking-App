const express = require('express');

const parkingRoutes = express.Router(); //Create an express router object
const parkingController = require('../controllers/parking-controller');

//Following get after '/todo' in browser

parkingRoutes.get('/', parkingController.index);
parkingRoutes.post('/', parkingController.create);

parkingRoutes.get('/add', (req,res) => {
  res.render('parking/parking-add', {});
})

parkingRoutes.get('/:id', parkingController.show);
parkingRoutes.put('/:id', parkingController.update);
parkingRoutes.delete('/:id', parkingController.delete);

module.exports = parkingRoutes;
