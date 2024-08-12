# database/init_db.R
library(RSQLite)

# Conexión a la base de datos SQLite
db <- dbConnect(SQLite(), dbname = "cinestancia.sqlite")

# Crear tabla Users
dbExecute(db, "
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )
")

# Crear tabla Movies
dbExecute(db, "
  CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    year INTEGER,
    genre TEXT,
    platform TEXT,
    director TEXT,
    rating INTEGER
  )
")

# Crear tabla Reviews
dbExecute(db, "
  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    movie_id INTEGER,
    review TEXT,
    rating INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(movie_id) REFERENCES movies(id)
  )
")

# Cerrar la conexión a la base de datos
dbDisconnect(db)
