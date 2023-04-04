from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)

def responseFormatter(status_code, status, data, message):
    return {
        'status_code': status_code,
        'status': status,
        'data': data,
        'message': message
    }

teams = {
    'Blackpool': 5,
    'Liverpool': 18,
    'Manchester United': 20,
    'Stoke City': 28,
    'Fulham': 13,
    'Blackburn Rovers': 4,
    'Manchester City': 19,
    'Sunderland': 29,
    'Bolton Wanderers': 6,
    'Arsenal': 1,
    'Birmingham City': 3,
    'Tottenham Hotspur': 31,
    'West Bromwich Albion': 33,
    'West Ham United': 34,
    'Aston Villa': 2,
    'Everton': 12,
    'Newcastle United': 22,
    'Wigan Athletic': 35,
    'Wolverhampton Wanderers': 36,
    'Chelsea': 10,
    'Swansea City': 30,
    'Queens Park Rangers': 24,
    'Norwich City': 23,
    'Reading': 25,
    'Southampton': 27,
    'Crystal Palace': 11,
    'Cardiff City': 9,
    'Hull City': 15,
    'Burnley': 8,
    'Leicester City': 17,
    'Watford': 32,
    'AFC Bournemouth': 0,
    'Middlesbrough': 21,
    'Brighton and Hove Albion': 7,
    'Huddersfield Town': 14,
    'Sheffield United': 26,
    'Leeds United': 16
}


@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/predict_match', methods=['POST'])
def predict_match():
    home_team = request.form['home_team']
    away_team = request.form['away_team']
    home_team_code = teams[home_team]
    away_team_code = teams[away_team]
    result = {'home_team_code': home_team_code, 'away_team_code': away_team_code}
    return responseFormatter(200, 'success', result, 'Match prediction successful')


if __name__ == '__main__':
    app.run(debug=True)
