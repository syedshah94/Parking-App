DROP TABLE IF EXISTS parking_users;
CREATE TABLE IF NOT EXISTS parking_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT,
  email VARCHAR(255)
);

DROP TABLE IF EXISTS parking_spots;
CREATE TABLE IF NOT EXISTS parking_spots (
  id SERIAL PRIMARY KEY,
  longitude DECIMAL(12,9),
  latitude DECIMAL(12,9),
  location TEXT,
  description TEXT,
  available BOOLEAN,
  departTime TEXT,
  user_id INTEGER REFERENCES parking_users(id)
);
