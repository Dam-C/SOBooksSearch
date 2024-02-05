import csv
import psycopg2
from flask import Flask, request
from flask_cors import CORS
from sqlalchemy import URL, create_engine, text
from sqlalchemy.orm import sessionmaker


# cmd list for python environment
# . .venv/bin/activate
# pip install -U Flask
# pip install -U flask-cors
# pip install -U SQLAlchemy
# pip install -U psycopg2-binary
# python3 server.py

# NEON db access
# postgresql://Dam-C:bVFRaX3TeQo4@ep-summer-snow-82431142.eu-central-1.aws.neon.tech/books?sslmode=require

# Creates the engine that allows to connect to the Neon DB
engine = create_engine("postgresql://Dam-C:bVFRaX3TeQo4@ep-summer-snow-82431142.eu-central-1.aws.neon.tech/books?sslmode=require")

app = Flask(__name__)
CORS(app)
app.config['JSON_AS_ASCII'] = False

# # setup connection
# conn = psycopg2.connect(database="books", user="Dam-C", password="bVFRaX3TeQo4", host="ep-summer-snow-82431142.eu-central-1.aws.neon.tech", port="5432")
# cur = conn.cursor()

@app.route("/")
def default():
    return {"default return":"default return for tests"}

@app.route("/start")
def start ():
    return {"test" : ["one", "two", "three","four"]}

@app.route("/books")
def lib():
    return rows

@app.route("/search", methods =["GET","POST"])
def search():
    if request.method == "POST":
        # get the inputs from the user
        data = request.get_json()
        query = data.get("userSearch")
        if not query:
            return {"result": "Search field can not be empty"}
        
        # gets the data from the Neon DB with the user's query
        with engine.connect() as connection:
            
            
            countStatement = text("SELECT COUNT(*) FROM books WHERE unaccent(title) ILIKE unaccent(:query)")
            queryResponseCount = connection.execute(countStatement,{"query": "%"+ query + "%"}).scalar()
            
            resultsLimit = 20
            statement = text("SELECT * FROM books WHERE unaccent(title) ILIKE unaccent(:query) LIMIT :limit")
            queryResponse = connection.execute(statement, {"query": "%" + query + "%", "limit": resultsLimit}).fetchall()
            # checks if the response is empty (no match)
            if len(queryResponse) >= 1:
                # initiate a dict to send to the front
                pack = {"result":[],"totResults":queryResponseCount}
                # prepares keys for the dicts / objects of the db
                column_names = ["id", "title","cote","author","date","location"]
                # fill the result dict to send to the front
                pack["result"] = [dict(zip(column_names, row)) for row in queryResponse]
                return pack 
            else:
                return {"noResult": f"{query} n'a pas été trouvé"}
    else:
        return {"result": f"so sorry"}


@app.route("/resultsNewPage", methods=["GET", "POST"])
def resultsNewPage():
    if request.method == "POST":
# get the inputs from the user
        data = request.get_json()
        query = data.get("userSearch")
        nextPage = int(data.get("nextPage"))
        if not query:
            return {"result": "Search field can not be empty"}
        
        # gets the data from the Neon DB with the user's query
        with engine.connect() as connection:
              
            resultsLimit = 20
            resultsOffset =resultsLimit * (nextPage -1)
            statement = text("SELECT * FROM books WHERE unaccent(title) ILIKE unaccent(:query) LIMIT :limit OFFSET :offset")
            queryResponse = connection.execute(statement, {"query": "%" + query + "%", "limit": resultsLimit, "offset": resultsOffset}).fetchall()
            # checks if the response is empty (no match)
            if len(queryResponse) >= 1:
                # initiate a dict to send to the front
                pack = {"result":[]}
                # prepares keys for the dicts / objects of the db
                column_names = ["id", "title","cote","author","date","location"]
                # fill the result dict to send to the front
                pack["result"] = [dict(zip(column_names, row)) for row in queryResponse]
                return pack 
            else:
                return {"noResult": f"{query} n'a pas été trouvé"}

    else:
        return {"noResult":"Sorry something went wrong"}

if __name__ == "__main__":
    app.run(debug=True)