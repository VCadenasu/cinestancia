library(RSQLite)

db <- dbConnect(SQLite(), dbname = "cinestancia.sqlite")

dbExecute(db, "
  CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY,
    title TEXT,
    year INTEGER,
    genre TEXT,
    platform TEXT,
    director TEXT,
    rating INTEGER
  )
")

dbExecute(db, "
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT
  )
")

dbDisconnect(db)
