import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React from "react";

// CSS import
import "./History.css";

// Components import
import ScoreCard from "../components/ScoreCard";
import { Logos } from "../theme/Images";
import { useLocation } from "react-router-dom";

interface MatchHistory {
  home_team: string;
  away_team: string;
  date: string;
  result_full: string;
  season: string;
}

const dateOptions = { day: "numeric", month: "numeric", year: "numeric" };

interface MatchHistoryProps {
  data: {
    history: Array<MatchHistory>;
    away_avg_goal_scored: any;
    home_team: string;
    away_team: string;
    predicted_result: {
      home_team_result: number;
      away_team_result: number;
    };
    home_avg_goal_scored: any;
    avg_away_possession: string;
    avg_home_possession: string;
  };
}


const History: React.FC = () => {
  const location = useLocation<{ match_history: MatchHistoryProps }>();
  let result = location.state["match_history"]["data"];
  console.log(result);
  return (
    <IonPage>
      <IonContent>
        <div className="history-wrap">
          <div className="header">
            <div className="teams">
              <div
                onClick={() => {
                  console.log(result);
                }}
                className="logo"
                style={{
                  background: `url(${Logos[result["home_team"]]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="teamName">{result["home_team"]}</p>
            </div>
            <div className="teams" style={{ justifyContent: "end" }}>
              <p className="scoreline">
                {result.predicted_result.home_team_result}-
                {result.predicted_result.away_team_result}
              </p>
              <p className="teamName our-preds">(Our Prediction)</p>
            </div>
            <div className="teams">
              <div
                className="logo"
                style={{
                  background: `url(${Logos[result["away_team"]]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="teamName">{result["away_team"]}</p>
            </div>
          </div>
          <div className="prev-meeting">Previous meetings</div>
          <div className="score-history-wrap">
            <div className="sec1">
              <ScoreCard
                avgGoals={result["home_avg_goal_scored"]}
                text="Average goals scored by home team"
              />
              <ScoreCard
                avgGoals={result["avg_home_possession"]}
                text="Average Possession of home team"
              />
            </div>
            <IonGrid className="history-table">
              {result["history"].length === 0 ? (
                <IonRow>
                  <IonCol size="12" className="row-text">
                    No match history available
                  </IonCol>
                </IonRow>
              ) : (
                <>
                  <IonRow>
                    <IonCol size="4">
                      <strong style={{ color: "#6CDC69" }}>Season</strong>
                    </IonCol>
                    <IonCol size="4">
                      <strong style={{ color: "#6CDC69" }}>Date</strong>
                    </IonCol>
                    <IonCol size="4">
                      <strong style={{ color: "#6CDC69" }}>Result</strong>
                    </IonCol>
                  </IonRow>
                  {result["history"].map((match: MatchHistory, index: any) => {
                    const backgroundColor =
                      index % 2 === 0 ? "#6142A4" : "#4D3580";
                    return (
                      <IonRow style={{ backgroundColor }} key={index}>
                        <IonCol size="4" className="row-text">
                          {match["season"]}
                        </IonCol>
                        <IonCol size="4" className="row-text">
                          {new Date(match["date"]).toLocaleDateString()}
                        </IonCol>
                        <IonCol size="4" className="row-text">
                          {match["result_full"]}
                        </IonCol>
                      </IonRow>
                    );
                  })}
                </>
              )}
            </IonGrid>
            <div className="sec1">
              <ScoreCard
                avgGoals={result["away_avg_goal_scored"]}
                text="Average goals scored by away team"
              />
              <ScoreCard
                avgGoals={result["avg_away_possession"]}
                text="Average Possession of away team"
              />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default History;
