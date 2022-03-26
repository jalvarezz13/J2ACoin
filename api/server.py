from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
from flask_cors import CORS, cross_origin
from requests import Session
from dotenv import load_dotenv
from flask import Flask, request
import json
import time
import os

load_dotenv()

api = Flask(__name__)
api.config['CORS_HEADERS'] = 'Content-Type'
CORS(api)

# Variables to save temporal data to avoid run continuous requests every second
ranking = [None, None]

heatMap = {"bitcoin": [None, None],
           "ethereum": [None, None],
           "tether": [None, None],
           "bnb": [None, None],
           "usdc": [None, None],
           "xrp": [None, None],
           "terra": [None, None],
           "solana": [None, None],
           "cardano": [None, None],
           "avalanche": [None, None]}

exchangeInfo = [None, None]

urlScore = {"https://crypto.com/exchange": [None, None],
            "https://trade.bit2me.com/exchange/BTC-EUR": [None, None],
            "https://www.binance.com/": [None, None],
            "https://pro.coinbase.com": [None, None]}

urlData = {"https://crypto.com/exchange": [None, None],
           "https://trade.bit2me.com/exchange/BTC-EUR": [None, None],
           "https://www.binance.com/": [None, None],
           "https://pro.coinbase.com": [None, None]}


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

    if (ranking == [None, None] or ((time.time() - ranking[0]) > 60)):
        try:
            response = session.get(url, params=parameters)
            ranking[0] = time.time()
            ranking[1] = json.loads(response.text)
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)

    return ranking[1]


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

    if (heatMap.get(slug) == [None, None] or ((time.time() - heatMap.get(slug)[0]) > 60)):
        try:
            response = session.get(url, params=parameters)
            heatMap.get(slug)[0] = time.time()
            heatMap.get(slug)[1] = json.loads(response.text)
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)

    return heatMap.get(slug)[1]


@ api.route('/exchange', methods=['GET'])
@ cross_origin()
def getExchangeInfo():
    url = "https://pro-api.coinmarketcap.com/v1/exchange/info"
    parameters = {
        'id': '89,270,1149,1561'
    }
    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': os.getenv('COINMARKETCAP_API_KEY')
    }

    session = Session()
    session.headers.update(headers)

    if (exchangeInfo == [None, None] or ((time.time() - exchangeInfo[0]) > 3600)):
        try:
            response = session.get(url, params=parameters)
            exchangeInfo[0] = time.time()
            exchangeInfo[1] = json.loads(response.text)
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)

    return exchangeInfo[1]


@ api.route('/urlScore', methods=['POST'])
@ cross_origin()
def getUrlScore():
    urlRequested = request.form["url"]
    url = 'https://urlscan.io/api/v1/scan/'
    headers = {
        'Accepts': 'application/json',
        'API-Key': os.getenv('URLSCAN_API_KEY')
    }
    data = {
        'url': urlRequested,
        'visibility': 'public'
    }

    session = Session()
    session.headers.update(headers)

    if (urlScore.get(urlRequested) == [None, None] or ((time.time() - urlScore.get(urlRequested)[0]) > 3600) or urlScore.get(urlRequested)[1].get("message") != "Submission successful"):
        try:
            response = session.post(url, data)
            urlScore.get(urlRequested)[0] = time.time()
            urlScore.get(urlRequested)[1] = json.loads(response.text)
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)

    return urlScore.get(urlRequested)[1]


@ api.route('/urlData', methods=['POST'])
@ cross_origin()
def getUrlData():
    apiUrl = request.form["apiUrl"]
    exchangeUrl = request.form["exchangeUrl"]

    headers = {
        'Accepts': 'application/json'
    }

    session = Session()
    session.headers.update(headers)

    if (urlData.get(exchangeUrl) == [None, None] or ((time.time() - urlData.get(exchangeUrl)[0]) > 3600)):
        try:
            time.sleep(10)
            response = session.get(apiUrl)
            urlData.get(exchangeUrl)[0] = time.time()
            urlData.get(exchangeUrl)[1] = json.loads(response.text)
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)

    return urlData.get(exchangeUrl)[1]


if __name__ == '__main__':
    api.run()
