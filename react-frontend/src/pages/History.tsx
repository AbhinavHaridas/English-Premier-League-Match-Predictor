import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
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

  let homeTeamLogo: string = Logos['Leeds United']
  let awayTeamLogo: string = Logos['AFC Bournemouth'];

  return (
    <IonPage>
      <IonContent>
        <div className="history-wrap">
          <div className="header">
            <div className="teams">
              <img className="logo" src={homeTeamLogo} alt={homeTeam} />{" "}
              <p className="teamName">{homeTeam}</p>
            </div>
            <div className="teams">
              <p className="scoreline">
                {homeTeamScore}-{awayTeamScore}
              </p>
              <p className="teamName">(Our Prediction)</p>
            </div>
            <div className="teams">
              <img className="logo" src={awayTeamLogo} alt={awayTeam} />{" "}
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
                    <IonCol size="4" className="row-text">20/21</IonCol>
                    <IonCol size="4" className="row-text">{new Date().toLocaleDateString()}</IonCol>
                    <IonCol size="4" className="row-text">2-1</IonCol>
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
