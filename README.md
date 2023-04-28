# English-Premier-League-Match-Predictor

This is a football match predictor app that uses machine learning techniques to predict the outcome of a match between two teams in the English Premier League. The English Premier League ranks as the fourth most-watched league worldwide, and given the immense popularity of sports betting in the UK, the model developed in this project has the potential to provide valuable and actionable insights for stakeholders, enabling them to make more informed decisions.
> The app is built using **Ionic React (TSX)** for the frontend, **Flask** for the backend, and scikit-learn's implementation of **KNN Regressor** as the primary machine learning model. Other models that are trained on the dataset include 
* Lasso 
* ElasticNet 
* RidgeRegression
* Random Forest Regressor
* Support Vector Regression 
* Linear Regression.

# Getting Started
To get started with this app, you will need to do the following:
1. Clone this repository: git clone https://github.com/AbhinavHaridas/English-Premier-League-Match-Predictor.git
2. Change into the directory: `cd English-Premier-League-Match-Predictor`
3. Install the dependencies: `npm install`
4. Start the backend server: `python models.py`
5. Start the frontend server: `npm start`

# Using the App
Once you have started the app, you can select the home team and away team by scrolling through the list. On clicking the "Predict" button, the app will display the predicted outcome of the match, the recent history between the two teams, and the average goals and average possession of each team.

# Data
The data used to train the machine learning models is sourced from the kaggle. The data includes the results of all matches played between teams in the league 2010 to 2021, as well as information on the teams, such as their average goals, average shots taken, average passes completed and possession per match.

# Contributing
If you would like to contribute to this project, feel free to submit a pull request. Any contributions are welcome.
