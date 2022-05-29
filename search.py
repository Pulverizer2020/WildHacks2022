from flask import Response, request
from flask_restful import Resource

import openai
import json


class GiftSearchEndpoint(Resource):
    def __init__(self):
        self.last_response = None

    def get(self):
        if self.last_response:
            return Response(json.dumps(self.last_response), mimetype="application/json", status=200)
        else:
            return Response(json.dumps({"message":"make a query for openAI"}), mimetype="application/json", status=200)

    def post(self):
        print("in here")
        body = request.get_json()
        print(body)

        description = body["prompt"]
        print(description)
        response = openai.Completion.create(
            engine="text-babbage-001",
            prompt=generate_prompt(description),
            max_tokens=100,
            temperature=0.8,
        )

        print(response)
        json_response = parse_response(response["choices"][0]["text"].strip())
        self.last_response = json_response
        print(json_response)
        

        return Response(json.dumps(json_response), mimetype="application/json", status=200)

def parse_response(text):
    items = text.split("\n")
    items = [i[3:] for i in items]

    ret = []

    for i in items:
        rec, desc = i.split(" - ")

        ret.append({
            "recommendation": rec,
            "justification": desc,
            "products": []
        })

    return ret

def generate_prompt(description):
    return f"""This is an expert recommendation tool that gives gift ideas based on a personal description.


Description: A man in his mid 20's from the midwest. He is conservative and patriotic. He enjoys hunting. He has a lifted truck and is family oriented. He is an avid fisherman and outdoorsman, but also loves a good beer or cigar.

Gift Recommendations:
1. Engraved cigar cutter - To cut the tip off of his cigar without it tearing.
2. Tactical pen and flashlight - To use if he needs to defend himself while out camping.
3. American Flag - That can show his pride for America. 
4. Whiskey flask with matching shot glass - To sip his favorite bourbon from when he hunts.
5. Bullet shaped BBQ lighter - To use while barbequing next to his truck.
6. Bluetooth tire pressure sensor - To keep up with his tires to ensure he drives safe.


Description: {description} 

Gift Recommendations:"""


def initialize_routes(api):
    api.add_resource(
        GiftSearchEndpoint, 
        '/api/search', '/api/search/'
    )


