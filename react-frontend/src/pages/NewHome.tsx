import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";

// Import Components
import Team from "../components/Team";

const NewHome: React.FC = () => {
    const [homeTeam, setHomeTeam] = useState("");
    const [awayTeam, setAwayTeam] = useState("");

    const predictMatch = () => {
        console.log("Predict");
        console.log("Home", homeTeam);
        console.log("Away", awayTeam);
    };

    return (
      <IonPage>
        <IonContent>
          <div className="new-home-wrap">
          <h1 className="home-head">Select the teams</h1>
            <Team team={homeTeam} setTeam={setHomeTeam}/>
            <Team team={awayTeam} setTeam={setAwayTeam} />
            <button className={`pred-home ${homeTeam == awayTeam || homeTeam == '' || awayTeam == '' ? 'red-dot' : 'pred-hover'}`} disabled={homeTeam == awayTeam} onClick={predictMatch}>Predict</button>
          </div>
        </IonContent>
      </IonPage>
    );
};

export default NewHome;
