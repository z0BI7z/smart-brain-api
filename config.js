const { config } = require('dotenv');
config();

const POSTGRES_USER =
  process.env.POSTGRES_USER || 'smart_brain_admin';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || '';
const POSTGRES_HOST = process.env.POSTGRES_HOST || '127.0.0.1';
const POSTGRES_DB = process.env.POSTGRES_DB || 'smart_brain';

const CLARIFAI_API_KEY = process.env.CLARIFAI_API_KEY || '';

module.exports = {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DB,
  CLARIFAI_API_KEY,
};
