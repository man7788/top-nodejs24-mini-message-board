#! /usr/bin/env node

require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  author VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages (message, author, added) 
VALUES
  ('Hi there!', 'Amando', '1999-01-08 04:05:06'),
  ('Hello World!', 'Charles', '2000-02-17 04:05:06'),
  ('What''s up?', 'David', '2010-03-18 04:05:06');
`;

const url = process.argv[2] || process.env.PGCONNECTSTRING;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: url,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
