import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";

// Import Components
import Team from "../components/Team";
import { useHistory } from "react-router";

const NewHome: React.FC = () => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const history = useHistory();

  const predictMatch = () => {
    console.log("Predict");
    console.log("Home", homeTeam);
    console.log("Away", awayTeam);
    let data = new FormData();
    data.append("home_team", homeTeam);
    data.append("away_team", awayTeam);
    fetch("http://127.0.0.1:5000/predict_match", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        fetch("http://127.0.0.1:5000/get_match_history", {
          method: "POST",
          body: data,
        })
          .then((response) => response.json())
          .then((match_history) => {
            match_history["data"]["predicted_result"] = result["data"];
            match_history["data"]["home_team"] = homeTeam;
            match_history["data"]["away_team"] = awayTeam;

            history.push({
              pathname: "/history",
              state: { match_history },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <IonPage>
      <IonContent>
        <div className="new-home-wrap">
          <h1 className="home-head">Select the teams</h1>
          <Team team={homeTeam} setTeam={setHomeTeam} />
          <Team team={awayTeam} setTeam={setAwayTeam} />
          <button className={`pred-home ${homeTeam == awayTeam || homeTeam == '' || awayTeam == '' ? 'red-dot' : 'pred-hover'}`} disabled={homeTeam == awayTeam} onClick={predictMatch}>Predict</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NewHome;
