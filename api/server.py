from flask import Flask
from flask_cors import CORS, cross_origin
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json
import time

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
        'X-CMC_PRO_API_KEY': '5a69cd96-6777-4776-8c13-0e3f2ca6335b',
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


if __name__ == '__main__':
    api.run()
