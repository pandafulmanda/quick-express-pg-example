const db = require('./db')

const getSongQuery = `
SELECT
	artist.name AS artist_name,
	song.title AS song_title,
	song.length AS song_length
FROM artist
JOIN whomadedis ON artist.id = whomadedis.artist_id
JOIN song ON song.id = whomadedis.song_id
WHERE song.title = $1;
`

const insertSongQuery = `
INSERT INTO
  song
(title, length) VALUES
('Trapped in the Closet', 1200);
`

function getSongByTitle(title) {
  return db.query(getSongQuery, title)
}

module.exports = {
  getSongByTitle: getSongByTitle,
}