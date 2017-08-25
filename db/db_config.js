const { Pool, Client } = require('pg')

// pools will use environment variables
// for connection information
const pool = new Pool()

<<<<<<< 876bafbbb86ed1506e5b6b7a7a90487b2a1e5297
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
=======
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
>>>>>>> travis config and jest + folder

// // you can also use async/await
// const res = await pool.query('SELECT NOW()')
// await pool.end()

// // clients will also use environment variables
// // for connection information
// const client = new Client()
// await client.connect()

// const res = await client.query('SELECT NOW()')
<<<<<<< 876bafbbb86ed1506e5b6b7a7a90487b2a1e5297
// await client.end()

module.exports = pool;
=======
// await client.end()
>>>>>>> travis config and jest + folder
