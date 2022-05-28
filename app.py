from dotenv import load_dotenv
load_dotenv()

import os
import openai
from flask import Flask, redirect, render_template, request, url_for
from flask_restful import Api

from search import initialize_routes


app = Flask(__name__)
api = Api(app)
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/", methods=("GET", "POST"))
def index():
    # if request.method == "POST":
    #     description = request.form["prompt"]
    #     response = openai.Completion.create(
    #         engine="text-babbage-001",
    #         prompt=generate_prompt(description),
    #         max_tokens=100,
    #         temperature=0.8,
    #     )
    #     return redirect(url_for("index", result=response.choices[0].text))

    # result = request.args.get("result")
    # return render_template("index.html", result=result)
    return "nothing for now"

initialize_routes(api)

# enables flask app to run using "python3 app.py"
if __name__ == '__main__':
    app.run()

