import React, { useState } from 'react';
import { IonSelect, IonSelectOption, IonButton, IonTitle } from '@ionic/react';
import './TeamDropDown.css';
import { TEAMS } from '../keys';

export const TeamDropDown: React.FC = () => {
    const [homeTeam, setHomeTeam] = useState("");
    const [awayTeam, setAwayTeam] = useState("");

    const buttonSelect = async(): Promise<void> => {
        console.log(homeTeam);
        console.log(awayTeam);
        let data = new FormData(); 
        data.append("home_team", homeTeam);
        data.append("away_team", awayTeam);
        try {
            const response = await fetch("", {
                method: 'POST',
                body: data
            });
            console.log(response);
        } catch(e) {
            console.error(e)
        } 
    }
    
    return (
        <div className='container'>
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
        </div>
    )
}