CREATE USER smart_brain_admin WITH PASSWORD 'sb_pass';

CREATE DATABASE smart_brain OWNER smart_brain_admin;
\c smart_brain smart_brain_admin

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255) NOT NULL UNIQUE,
  entries BIGINT DEFAULT 0,
  joined TIMESTAMP NOT NULL
);

CREATE TABLE login (
  id SERIAL PRIMARY KEY,
  hash VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

