const Parking = require('../models/parking');

const parkingController = {}; //Create our controller object to hold our control methods

parkingController.index = (req, res) => {
  Parking.findAll()
  .then((parking) => {
    res.status(200).format({
      'text/html': function(){
        res.render('./parking/parking-index', {
          parking
        })

      },


      'application/json': function(){
        res.json({parking});
      },
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Not found!',
      error: err,
    });
  });
};

parkingController.show = (req, res) => {
  Parking.findById(req.params.id)
  .then(parking => {
    res.status(200).render('./parking/parking-single', {
      parking,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message:"Not Found!",
      error: err,
    });
  });
}

parkingController.create = (req, res) => {
  console.log(req.body);
  Parking.create({

    latitude: req.body.latitude || null,
    longitude: req.body.longitude || null,
    location: req.body.location,
    description: req.body.description,
    available: req.body.available,
    departTime: req.body.departTime,
  }).then(() => {
    res.redirect('/parking');
    //redirect uses the directory the browser will follow, not the relative path.
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Could not create successfully',
      error: err,
    });
  });
};

parkingController.update = (req, res) => {
  Parking.update({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    location: req.body.location,
    description: req.body.description,
    available: req.body.available,
    departTime: req.body.departTime,
  }, req.params.id).then(parking => {
    res.redirect(`/parking`);
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Update failed',
      error: err,
    });
  });
};

parkingController.delete = (req, res) => {
  Parking.destroy(req.params.id)
  .then(() => {
    res.redirect('/parking');
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Delete failed',
      error: err,
    });
  });
};

module.exports = parkingController;

