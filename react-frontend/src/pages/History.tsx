import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React from "react";

// CSS import
import "./History.css";

// Components import
import ScoreCard from "../components/ScoreCard";
import { Logos } from "../theme/Images";

const History: React.FC = () => {
  let homeTeam: string = "Leeds";
  let awayTeam: string = "Wolverhampton Wanderers";

  let homeTeamScore: number = 2;
  let awayTeamScore: number = 1;

  let homeTeamLogo: string = Logos["Newcastle United"];
  let awayTeamLogo: string = Logos["Middlesbrough"];

  return (
    <IonPage>
      <IonContent>
        <div className="history-wrap">
          <div className="header">
            <div className="teams">
              <div
                className="logo"
                style={{
                  background: `url(${homeTeamLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="teamName">{homeTeam}</p>
            </div>
            <div className="teams" style={{justifyContent: 'end'}}>
              <p className="scoreline">
                {homeTeamScore}-{awayTeamScore}
              </p>
              <p className="teamName our-preds">(Our Prediction)</p>
            </div>
            <div className="teams">
              <div
                className="logo"
                style={{
                  background: `url(${awayTeamLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="teamName">{awayTeam}</p>
            </div>
          </div>
          <div className="prev-meeting">Previous meetings</div>
          <div className="score-history-wrap">
            <div className="sec1">
              <ScoreCard
                avgGoals={2.5}
                text="Average goals scored by home team"
              />
              <ScoreCard
                avgGoals={0.5}
                text="Average Possession of home team"
              />
            </div>
            <IonGrid className="history-table">
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
              {[...Array(5)].map((_, index) => {
                const backgroundColor = index % 2 === 0 ? "#6142A4" : "#4D3580";
                return (
                  <IonRow style={{ backgroundColor }} key={index}>
                    <IonCol size="4" className="row-text">
                      20/21
                    </IonCol>
                    <IonCol size="4" className="row-text">
                      {new Date().toLocaleDateString()}
                    </IonCol>
                    <IonCol size="4" className="row-text">
                      2-1
                    </IonCol>
                  </IonRow>
                );
              })}
            </IonGrid>
            <div className="sec1">
              <ScoreCard
                avgGoals={2.5}
                text="Average goals scored by away team"
              />
              <ScoreCard
                avgGoals={0.5}
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
