import json
from bs4 import BeautifulSoup
import requests
import urllib.parse
from selectorlib import Extractor
import concurrent.futures
import time
from urllib import request
from time import sleep

# Create an Extractor by reading from the YAML file
e2 = Extractor.from_yaml_file('search_results.yml')
e = Extractor.from_yaml_file('selectors.yml')


# ----------- Etsy Page Scraper  ---------

def getetsy(keywords,amt_of_products):
    safe_string = urllib.parse.quote_plus(keywords)
    # r.extract_keywords_from_text(keyword)
    # nk = r.get_ranked_phrases()
    eurl = f"https://openapi.etsy.com/v2/listings/active?keywords={safe_string}&limit={amt_of_products}&min_price=1&max_price=1000&includes=Images&sort_on=score&api_key=irfd7hodi7rj4mp6yd4hmkqv"
    etsy = requests.get(eurl)
    etsyproduct = etsy.content
    decetsy = etsyproduct.decode('utf-8')
    etsyjson = json.loads(decetsy)
    etsyresult = etsyjson['results']
    return etsyresult


# ----------- Amazon Product Scraper ----------

def scrape_amazon(product):
    print("Saving Product: %s" % product['title'])
    url = "https://www.amazon.com" + product['url']
    productImage = None
    headers = {
        'dnt': '1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'referer': 'https://www.amazon.com/',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    }

    # Download the page using requests
    r = requests.get(url, headers=headers)
    # Simple check to check if page was blocked (Usually 503)
    if r.status_code > 500:
        if "To discuss automated access to Amazon data please contact" in r.text:
            print("Page %s was blocked by Amazon. Please try using better proxies\n" % url)
        else:
            print("Page %s must have been blocked by Amazon as the status code was %d" % (url, r.status_code))
        return ['Amazon', product['title'], product['price'], None, productImage, product['url']]
    resultingProduct = e.extract(r.text)
    if resultingProduct:
        if resultingProduct['images']:
            productImage = list(json.loads(resultingProduct['images']))[-1]
            return ['Amazon', product['title'], product['price'], None, productImage, product['url']]
    return ['Amazon', product['title'], product['price'], None, productImage, product['url']]

# ----------- Amazon Page Scraper -------------

def scrape_page_amazon(url):
    headers = {
        'dnt': '1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'referer': 'https://www.amazon.com/',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    }

    # Download the page using requests
    r = requests.get(url, headers=headers)
    # Simple check to check if page was blocked (Usually 503)
    if r.status_code > 500:
        if "To discuss automated access to Amazon data please contact" in r.text:
            print("Page %s was blocked by Amazon. Please try using better proxies\n" % url)
        else:
            print("Page %s must have been blocked by Amazon as the status code was %d" % (url, r.status_code))
        return None
    return e2.extract(r.text)


# ----------- INPUTS --------------

def getEtsyGifts(input_string, amt_of_products):
    # input_string <-- Product Idea
    # amt_of_products <-- Amount of Products to get from each store

    # ----------- Etsy Products --------------
    gatheredItems = getetsy(input_string,amt_of_products)
    etsyJsons = []

    etsyJsons = [['Etsy',
                             item['title'],
                             item['price'],
                             item['currency_code'],
                             item['Images'][0]['url_170x135'],
                             item['url']]
                             for item in gatheredItems]

    return etsyJsons

def getAmazonGifts(input_string, amt_of_products):

    # ---------------- Amazon Scrape ----------------

    url_amazon = f"https://www.amazon.com/s?k={urllib.parse.quote_plus(input_string).replace('%20', '+')}"
    data = scrape_page_amazon(url_amazon)
    if data:
        first_products = data['products'][:amt_of_products]
        amazonJsons = []
        with concurrent.futures.ThreadPoolExecutor() as executor:
            for result in executor.map(scrape_amazon, first_products):
                amazonJsons.append(result)

    print("amazonJsons Finished")
    return amazonJsons






#print(getEtsyGifts("George Washington mug", 3))

#print(getAmazonGifts("Nice", 3))

# ----------- Uncommon Gifts Products --------------

'''
def scrape_uncommon(url):
        headers = {
            'dnt': '1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'referer': 'https://www.amazon.com/',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        }

        # Download the page using requests
        # print("Downloading %s" % url)
        r = requests.get(url, headers = headers)
        # Simple check to check if page was blocked (Usually 503)
        html = r.text
        soup = BeautifulSoup(html, "html.parser")
        soup.
        jsonified = json.loads(soup)

        print("use r")

scrape_uncommon("https://www.uncommongoods.com/search?q=ugly%20sweater")
'''