import React, { useState } from 'react';
import { IonSelect, IonSelectOption, IonButton, IonTitle } from '@ionic/react';
import './TeamDropDown.css';
import { TEAMS } from '../keys';

export const TeamDropDown: React.FC = () => {
    const [homeTeam, setHomeTeam] = useState("");
    const [awayTeam, setAwayTeam] = useState("");
    const [select, setSelect] = useState(0);
    const [results, setResults] = useState(null);

    const buttonSelect = (): void => {
        if (homeTeam === "" || awayTeam === "") {
            alert("Enter both teams")
        } else if (homeTeam !== awayTeam) {
            console.log(homeTeam);
            console.log(awayTeam);
            setSelect(1);
            let data = new FormData();
            data.append("home_team", homeTeam);
            data.append("away_team", awayTeam);
            fetch("http://127.0.0.1:5000/predict_match", {
                method: 'POST',
                body: data
            }).then(response => response.json()).then(data => {
                setResults(data);
            }).catch((error) => {
                console.log(error);
            });
        } else {
            alert('Cannot predict for same teams')
        }
    }


    const goBack = (): void => {
        // Resetting all states
        setSelect(0);
        setHomeTeam('');
        setAwayTeam('');
        setResults(null);
    }

    return (
        <div className='container'>
            {select === 0 ? <>
                <IonTitle size='large' className='title'>SELECT TEAMS</IonTitle>
                <IonSelect label='Select Home Team'
                    labelPlacement='floating' fill='outline'
                    onIonChange={(e) => setHomeTeam(e.target.value)}>
                    {
                        TEAMS.map((team) => (
                            <IonSelectOption>{team}</IonSelectOption>
                        ))
                    }
                </IonSelect>
                <IonSelect label='Select Away Team'
                    labelPlacement='floating' fill='outline'
                    onIonChange={(e) => setAwayTeam(e.target.value)}>
                    {
                        TEAMS.map((team) => (
                            <IonSelectOption>{team}</IonSelectOption>
                        ))
                    }
                </IonSelect>
                <IonButton color="medium" size="default" onClick={buttonSelect}>Predict Scores</IonButton>
            </> :
                <>
                    <h1 className='title'>RESULTS</h1>
                    <h3>{homeTeam}: {results && results["data"]["home_team_result"]}</h3>
                    <h3>{awayTeam}: {results && results["data"]["away_team_result"]}</h3>
                    <IonButton color="medium" size="default" onClick={goBack}>GO BACK</IonButton>
                </>}
        </div>

    )
}