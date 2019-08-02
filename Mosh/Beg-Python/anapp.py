import sqlite3
import json
from pathlib import Path

data = Path("movie.json").read_text()
movies = json.loads(data)
# we have the json file
print("A proper reading:", movies)
# it's an list so we can't
print(movies[0]["great"], movies[1]["great"])


# establish the connection to sqlite3;
# AN API
# with sqlite3.connect("db.sqlite3") as conn:
# create the tables
#   createTable = """ CREATE TABLE Movies(
#  id INTEGER NOT NULL PRIMARY KEY,
# great TEXT
# )
# """
#    conn.execute(createTable)
# iterate over the json for the values
#    command = "INSERT INTO Movies VALUES(?,?)"
#    for movie in movies:
#        conn.execute(command, tuple(movie.values()))
#    conn.commit()


# Read data from databse
with sqlite3.connect("db.sqlite3") as conn:
    command = "SELECT * FROM Movies"
    cursor = conn.execute(command)
    # for row in cursor:
    #    print(row)
    movies = cursor.fetchall()
    print(movies)
    # conn.commit()
