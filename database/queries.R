library(RSQLite)

db <- dbConnect(SQLite(), dbname = "cinestancia.sqlite")

getAllMovies <- function() {
  dbGetQuery(db, "SELECT * FROM movies")
}

addMovie <- function(title, year, genre, platform, director, rating) {
  dbExecute(db, "
    INSERT INTO movies (title, year, genre, platform, director, rating)
    VALUES (?, ?, ?, ?, ?, ?)", params = list(title, year, genre, platform, director, rating))
}

dbDisconnect(db)
