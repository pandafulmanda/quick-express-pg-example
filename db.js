const pgpromise = require('pg-promise')()
const config = {
  host: 'localhost',
  port: 5432,
  database: 'music',
  user: 'postgres'
}

const db = pgpromise(config)

module.exports = db