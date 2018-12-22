const express = require('express')
const queries = require('./queries')

const app = express()

app.get('/api/song/:title', handleSongAPIRoute)

function handleSongAPIRoute(req, res, nextFn) {
  const title = req.params.title

  queries.getSongByTitle(title)
    .then(function (result) {
      res.json(result)
    })
    .catch(function () {
      res.status(404)
    })
}



app.listen(3000, function () {
  console.log('The server is up and running! at port 3000')
})