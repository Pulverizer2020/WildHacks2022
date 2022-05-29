from dotenv import load_dotenv
load_dotenv()

import os
import openai
from flask import Flask, request
from flask_restful import Api

from search import initialize_routes

from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
openai.api_key = os.getenv("OPENAI_API_KEY")

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/", methods=("GET", "POST"))
def index():
    return "nothing for now"

initialize_routes(api)

# enables flask app to run using "python3 app.py"
if __name__ == '__main__':
    app.run()

