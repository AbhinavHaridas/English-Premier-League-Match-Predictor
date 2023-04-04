import React from 'react';
import { IonSelect, IonSelectOption, IonButton, IonTitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import { API_KEY } from '../keys'
import './TeamDropDown.css';

type ContainerProps = {

}


export const TeamDropDown: React.FC<ContainerProps> = () => {
   const [teams, setTeams] = useState<string[]>([]);
   
    useEffect(() => {
        async function getFiveTeams(): Promise<void> {
            const options = {
                method: 'GET',
            };

            const url = `https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=${API_KEY}`;

            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json);
            const teamNames = [];
            for (let i = 0; i < 20; i++) {
                teamNames.push(json[i]["team_name"]);
            }
            setTeams(teamNames);
        }   
        getFiveTeams();    
    }, []);

    console.log(teams);
    
    return (
        <div className='container'>
            <IonTitle size='large' className='title'>SELECT TEAMS</IonTitle>
            <IonSelect label='Select Home Team' labelPlacement='floating' fill='outline'>
                {
                    teams.map((teamName) => (
                        <IonSelectOption>{teamName}</IonSelectOption>
                    ))
                }
            </IonSelect>
            <IonSelect label='Select Away Team' labelPlacement='floating' fill='outline'>
                {
                    teams.map((teamName) => (
                        <IonSelectOption>{teamName}</IonSelectOption>
                    ))
                }
            </IonSelect>
            <IonButton color="medium" size="default">Predict Scores</IonButton>
        </div>
    )
}