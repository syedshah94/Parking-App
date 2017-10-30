const db = require('../db/config');

const Parking = {};

Parking.findAll = () =>
  db.query('SELECT * FROM parking_spots');

Parking.findById = id => {
  return db.oneOrNone ('SELECT * FROM parking_spots WHERE id = $1', [id]);
  //need to add a return here since implicit would return undefined
}
Parking.create = parking => {
  return db.one(`
    INSERT INTO parking_spots
    (latitude, longitude, location, description, available, departTime)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
    [parking.latitude, parking.longitude, parking.location, parking.description, parking.available, parking.departTime]);
}

//.update() requires a table and an id, so basically parking_users and some id
Parking.update = (parking, id) => {
  return db.one(`
    UPDATE parking_spots SET
    latitude = $1,
    longitude = $2,
    location = $3,
    description = $4,
    available = $5,
    departTime = $6
    WHERE id = $7
    RETURNING *`,
    [parking.latitude, parking.longitude, parking.location, parking.description, parking.available, parking.departTime, id]);
}

Parking.destroy = (id) => {
  return db.none(`
    DELETE FROM parking_spots
    WHERE id = $1`, [id]);
}

module.exports = Parking;
