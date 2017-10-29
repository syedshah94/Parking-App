DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT,
  email VARCHAR(255)
);

DROP TABLE IF EXISTS spots;
CREATE TABLE IF NOT EXISTS spots (
  id SERIAL PRIMARY KEY,
  longitude FLOAT(64),
  latitude FLOAT(64),
  location TEXT,
  description TEXT,
  available BOOLEAN,
  departTime TEXT,
  user_id INTEGER REFERENCES users(id)
);
