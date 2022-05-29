import json
import requests
import re
import random
import urllib.parse
from selectorlib import Extractor
import concurrent.futures
import time
from urllib import request
from time import sleep

# Create an Extractor by reading from the YAML file
e2 = Extractor.from_yaml_file('webScraper/search_results.yml')
e = Extractor.from_yaml_file('webScraper/selectors.yml')  # webScraper/

proxies = [{"http": "208.85.20.119:1987"},
           {"http": "165.225.94.217:10130"},
           {"http": "35.244.6.175:1080"},
           {"http": "165.225.206.227:10192"},
           {"http": "206.84.108.138:3128"},
           {"http": "165.225.206.219:10015"}
           ]


# ----------- Etsy Page Scraper  ---------

def getetsy(keywords, amt_of_products):
    safe_string = urllib.parse.quote_plus(keywords)

    # r.extract_keywords_from_text(keyword)
    # nk = r.get_ranked_phrases()
    eurl = f"https://openapi.etsy.com/v2/listings/active?keywords={safe_string}&limit={amt_of_products}&includes=Images&api_key=irfd7hodi7rj4mp6yd4hmkqv"
    etsy = requests.get(eurl, proxies=random.choice(proxies))
    etsyproduct = etsy.content
    decetsy = etsyproduct.decode('utf-8')
    etsyjson = json.loads(decetsy)
    etsyresult = etsyjson['results']
    if len(etsyresult) == 0 and "+" in safe_string:
        head, sep, tail = safe_string.partition('+')
        return getetsy(tail,amt_of_products)
    elif len(etsyresult) == 0:
        return []
    else:
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
    r = requests.get(url, headers=headers, proxies=random.choice(proxies))
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
    r = requests.get(url, headers=headers, proxies=random.choice(proxies))
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
    gatheredItems = getetsy(input_string, amt_of_products)
    etsyJsons = []

    etsyJsons = [['Etsy',
                  item['title'],
                  item['price'],
                  item['currency_code'],
                  item['Images'][0]['url_170x135'],
                  item['url']]
                 for item in gatheredItems]

    return etsyJsons

# ---------------- Amazon Scrape ----------------
def getAmazonGifts(input_string, amt_of_products):

    url_amazon = f"https://www.amazon.com/s?k={urllib.parse.quote_plus(input_string).replace('%20', '+')}"
    data = scrape_page_amazon(url_amazon)
    if data:
        print(data)
        first_products = data['products'][:amt_of_products]
        amazonJsons = []
        with concurrent.futures.ThreadPoolExecutor() as executor:
            for result in executor.map(scrape_amazon, first_products):
                print("this is a result from thread")
                print(result)
                amazonJsons.append(result)
                print(amazonJsons)
        print("amazonJsons Finished")
        return amazonJsons
    return []


# ----------- Uncommon Goods Products --------------
def getUncommonGoods(input_string, amt_of_products):
    input_string = re.sub(r'[^A-Za-z0-9 ]+', '', input_string)
    insert = urllib.parse.quote_plus(input_string)
    url = f"https://www.uncommongoods.com/br/search/?account_id=5343&auth_key=&domain_key=uncommongoods&request_type=search&br_origin=searchBox&search_type=keyword&fl=pid%2Ctitle%2Cthumb_image%2Cthumb_image_alt%2Curl%2Creviews%2Creviews_count%2Cprice_range%2Cbr_min_sale_price%2Cbr_max_sale_price%2Cdays_live%2Cmin_inventory%2Cis_customizable%2Cnum_skus%2Cis_coming_soon%2Cvideo_link%2Cmin_age%2Cmax_age%2Cis_ship_delay%2Cavailability_attr%2Cavailable_inventory%2Cshow_only_on_sale_page%2Cships_within%2Carrives_by_holiday%2Cis_experience%2Cmin_price_sku%2Cmax_price_sku&efq=-show_only_on_sale_page:%222%22&request_id=570364592201.813&facet.field=ug_cat_internal&facet.field=recipients&_br_uid_2=&q={insert}&rows=120&start=0&custom_country=US&url=%22%2Fsearch%3Fq%3D{insert}%26custom_country%3D%22US&ref_url=%22%2Fsearch%22"

    # Download the page using requests
    # print("Downloading %s" % url)
    response = request.urlopen(url)  # this is request NOT requests, dont think it can use proxies?
    html = response.read()
    html = html.decode("utf-8")
    htmlStruct = json.loads(html)
    response = htmlStruct['response']
    uncommonItems = []
    for gIndex in range(0, min(response['numFound'], amt_of_products)):
        gInfo = response['docs'][gIndex]
        gTitle = gInfo['title']
        gPrice = gInfo['price_range'][0]
        gURL = "https://www.uncommongoods.com" + gInfo['url']
        gImg = "https://images.uncommongoods.com" + gInfo['thumb_image']
        uncommonItems.append(['Uncommon Goods', gTitle, gPrice, None, gImg, gURL])
    return uncommonItems

# a = getUncommonGoods("Coke Zero", 3)
# b = getEtsyGifts("Spaghetti Sauce", 3)
# c = getAmazonGifts("Coke Zero", 3)
print("stop")