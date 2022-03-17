from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
from flask_cors import CORS, cross_origin
from requests import Request, Session
from dotenv import load_dotenv
from flask import Flask
import json
import time
import os

api = Flask(__name__)
api.config['CORS_HEADERS'] = 'Content-Type'
CORS(api)

# Dictionary to save temporal data to avoid run continuous requests every second
tempData = {"ranking": [None, None],
            "heatmap": [None, None],
            "exchanges": [None, None]}


@api.route('/ranking', methods=['GET'])
@cross_origin()
def get_ranking():
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    parameters = {
        'start': '1',
        'limit': '10',
        'convert': 'USD'
    }
    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': os.getenv('COINMARKETCAP_API_KEY'),
    }

    session = Session()
    session.headers.update(headers)

    if (tempData["ranking"] == [None, None] or ((time.time() - tempData["ranking"][0]) > 60)):
        try:
            response = session.get(url, params=parameters)
            tempData["ranking"][0] = time.time()
            tempData["ranking"][1] = json.loads(response.text)
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)

    return tempData["ranking"][1]


@api.route('/heatmap/<slug>', methods=['GET'])
@cross_origin()
def getCryptoInfo(slug):
    url = "https://data.messari.io/api/v1/assets/" + slug + "/metrics"
    parameters = {
        'fields': 'name,symbol,market_data/percent_change_usd_last_24_hours,market_data/price_usd'
    }
    headers = {
        'Accepts': 'application/json',
        'x-messari-api-key': '5f151699-2204-40bc-ac76-6477cc14efc1',
    }

    session = Session()
    session.headers.update(headers)

    try:
        response = session.get(url, params=parameters)
    except (ConnectionError, Timeout, TooManyRedirects) as e:
        print(e)

    return json.loads(response.text)


if __name__ == '__main__':
    api.run()
