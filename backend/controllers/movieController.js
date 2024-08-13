const db = require('../models/database');

exports.getAllMovies = (req, res) => {
  const query = "SELECT * FROM movies";
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(rows);
  });
};

exports.addMovie = (req, res) => {
  const { title, year, genre, platform, director, rating } = req.body;

  const query = "INSERT INTO movies (title, year, genre, platform, director, rating) VALUES (?, ?, ?, ?, ?, ?)";
  db.run(query, [title, year, genre, platform, director, rating], function(err) {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Movie added successfully" });
  });
};
