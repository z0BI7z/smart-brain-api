const { config } = require('dotenv');
config();

const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_HOST = process.env.POSTGRES_HOST;
const POSTGRES_DB = process.env.POSTGRES_DB;

const CLARIFAI_API_KEY = process.env.CLARIFAI_API_KEY;

module.exports = {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DB,
  CLARIFAI_API_KEY,
};
