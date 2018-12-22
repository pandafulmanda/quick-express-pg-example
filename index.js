const express = require('express')

const app = express()

app.get('/api/song/:title', handleSongAPIRoute)

function handleSongAPIRoute(req, res, nextFn) {
  const title = req.params.title

  db.query(getSongQuery, title)
    .then(function (result) {
      res.json(result)
    })
}

app.listen(3000, function () {
  console.log('The server is up and running! at port 3000')
})