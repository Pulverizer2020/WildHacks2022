from dotenv import load_dotenv
load_dotenv()

import os
import openai
from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS
from flask_multistatic import MultiStaticFlask as Flask                

from search import initialize_routes


app = Flask(__name__)
app.static_folder = [
    os.path.join(app.root_path, 'react-client', 'build', 'static'),
    os.path.join(app.root_path, 'static')
]
api = Api(app)
openai.api_key = os.getenv("OPENAI_API_KEY")

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/", methods=("GET", "POST"))
def index():
    return app.send_static_file('index.html')

initialize_routes(api)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

