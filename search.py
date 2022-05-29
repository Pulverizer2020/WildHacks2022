from flask import Response, request
from flask_restful import Resource

import openai
import json

import concurrent.futures as threads

from webScraper.main import getAmazonGifts, getEtsyGifts, getUncommonGoods


class GiftSearchEndpoint(Resource):
    def __init__(self):
        self.last_response = None

    # returns gift suggestions from last post to endpoint
    def get(self):
        if self.last_response:
            return Response(json.dumps(self.last_response), mimetype="application/json", status=200)
        else:
            return Response(json.dumps({"message":"make a query for openAI"}), mimetype="application/json", status=200)

    # takes body with "prompt" field containing description of gift reciever
    def post(self):
        body = request.get_json()
        print("POST request to api/search endpoint, body:", body)

        description = body["prompt"]
        if "temperature" in body:
            temp = float(body["temperature"])
        else:
            temp = 0.8
        print("giftee description:", description, temp)
        # actual call to OpenAI api, many optional args
        response = openai.Completion.create(
            engine="text-curie-001",
            prompt=generate_prompt(description),
            max_tokens=300,
            temperature=temp,
        )

        json_response = parse_response(response)
        json_response = compile_product_data(json_response)
        self.last_response = json_response

        return Response(json.dumps(json_response), mimetype="application/json", status=201)

# parses response for frontend to display
def parse_response(response):
    print(response)
    text = response["choices"][0]["text"].strip()
    items = text.split("\n")
    items = [i[3:] for i in items]

    ret = []

    for i in items:
        # sometimes parsing fails because of weird GPT3 outputs
        try:
            rec, desc = i.split(" - ")
        except:
            break

        ret.append({
            "recommendation": rec,
            "justification": desc,
            "products": []
        })

    return ret

def compile_product_data(items):
    # amazon results are fetched concurrently to save time
    amazon_results = []
    with threads.ThreadPoolExecutor() as executor:
        for result in executor.map(getAmazonGifts, [x["recommendation"] for x in items]):
            print(result)
            amazon_results.append(result)

    etsy_results = [getEtsyGifts(rec["recommendation"], 2) for rec in items]
    ug_results = [getUncommonGoods(rec["recommendation"], 2) for rec in items]

    for rec, amazon, etsy, ug in zip(items, amazon_results, etsy_results, ug_results):
        for product in (amazon + etsy + ug):
            rec["products"].append({
                "site": product[0],
                "product_name": product[1],
                "price": product[2],
                "currency": product[3],
                "image_url": product[4],
                "product_url": product[5]
            })

    return items

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


Description: A college student who is studying software engineering. He likes to watch cooking videos and basketball games. He plays League of Legends. He does not like the sun.

Gift Recommendations:
1. League of Legends mousepad - So he can improve his gaming skills.
2. Quality pair of noise-cancelling headphones - To help remove distractions while studying in the library.
3. Weather-resistant, UV-resistant sun umbrella - So he can enjoy the outdoors without getting sunburned.
4. Rice cooker - So he can make his own healthy meals on nights he doesn't feel like cooking.
5. Sanitizer wand - To keep his dorm room clean.
6. Laptop stand - So he can use his laptop more comfortably.
7. Personalized basketball jersey - So he can show his support for his favorite team.


Description: {description} 

Gift Recommendations:"""


def initialize_routes(api):
    api.add_resource(
        GiftSearchEndpoint, 
        '/api/search', '/api/search/'
    )


