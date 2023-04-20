from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import predict_match_result,get_latest_matches

app = Flask(__name__)
CORS(app)

def responseFormatter(status_code, status, data, message):
    return {
        'status_code': status_code,
        'status': status,
        'data': data,
        'message': message
    }
    # response.headers.add("Access-Control-Allow-Origin", "*")
    # return response

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/predict_match', methods=['POST'])
def predict_match():
    home_team = request.form['home_team']
    away_team = request.form['away_team']
    result = predict_match_result(home_team, away_team)
    return responseFormatter(200, 'success', result, 'Match prediction successful')

@app.route('/get_match_history', methods=['POST'])
def get_match_history():
    home_team = request.form['home_team']
    away_team = request.form['away_team']
    result = get_latest_matches(home_team, away_team)
    return responseFormatter(200, 'success', result, 'Fetched match history successfully')

if __name__ == '__main__':
    app.run(debug=True)
