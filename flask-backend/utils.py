import pandas as pd
import numpy as np
import pickle
import os


absolute_path = os.path.dirname(os.path.abspath(__file__))
file_path_1 = absolute_path + '/artifacts/clean_data.csv'
file_path_2 = absolute_path + '/artifacts/pl_wodel.pickle'


pl_data = pd.read_csv(file_path_1)
home_pred_cols = ["goal_home_ft","home_team_code","possession_avg_H","shots_avg_H","passes_avg_H"]
away_pred_cols = ["goal_away_ft","away_team_code","possession_avg_A","shots_avg_A","passes_avg_A"]

Xhome = pl_data[home_pred_cols]
Xaway = pl_data[away_pred_cols]

# Load the pickled objects into memory
with open(file_path_2, 'rb') as f:
    knnr_home, knnr_away, sc_home, sc_away, teams = pickle.load(f)


def predict_home(home_team_code,away_team_code):
    # filter pl_data to include only the rows for the specified team code
    pl_data_team = pl_data[pl_data["away_team_code"] == away_team_code]

    target_seasons = ['15/16','16/17','17/18','18/19','19/20','20/21']
    target_data_df = Xhome[(Xhome["home_team_code"] == home_team_code) &
     (pl_data_team["away_team_code"] == away_team_code) &
     (pl_data_team['season'].isin(target_seasons))]

    avg_df = pd.DataFrame(target_data_df.mean()).transpose()

    target_data_scaled_home = sc_home.transform(avg_df)

    # make predictions using the trained model
    prediction_home = knnr_home.predict(target_data_scaled_home)

    # # print the predicted values
    return np.ceil(prediction_home).astype(int)[0]


def predict_away(home_team_code,away_team_code):
    target_seasons = ['20/21','15/16','16/17','17/18','18/19','19/20']
    # filter pl_data to include only the rows for the specified team code
    pl_data_team = pl_data[pl_data["home_team_code"] == home_team_code]

    # find the latest year for the specified team
    target_data_df = Xaway[(Xaway["away_team_code"] == away_team_code) &
     (pl_data_team["home_team_code"] == home_team_code) &
     (pl_data_team['season'].isin(target_seasons))]

    avg_df = pd.DataFrame(target_data_df.mean()).transpose()

    target_data_scaled_away = sc_away.transform(avg_df)

    # make predictions using the trained model
    prediction_away = knnr_away.predict(target_data_scaled_away)
    return np.ceil(prediction_away).astype(int)[0]


def predict_match_result(home_team_name,away_team_name):
    home_team_code = teams[home_team_name]
    away_team_code = teams[away_team_name]

    home_team_result = predict_home(home_team_code,away_team_code)
    away_team_result = predict_away(home_team_code,away_team_code)

    print( {'home_team_result': home_team_result, 'away_team_result': away_team_result})
    return {'home_team_result': int(home_team_result), 'away_team_result': int(away_team_result)}


def get_latest_matches(home_team,away_team):
    # Filter the DataFrame to include only matches where home_team and away_team played against each other
    matches = pl_data[(pl_data['home_team'] == home_team) & (pl_data['away_team'] == away_team)].copy()
    
    # Convert the 'date' column to datetime format and sort the DataFrame by date in descending order
    matches['date'] = pd.to_datetime(matches['date'])
    matches = matches.sort_values(by='date', ascending=False)
    
    # Select only the desired columns and return as a list of dictionaries
    selected_cols = ['season','date','home_team', 'away_team', 'result_full']
    return matches[selected_cols].head(5).to_dict('records')