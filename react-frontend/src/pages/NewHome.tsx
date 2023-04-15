import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import ScrollList from "../components/ScrollList";
import "./Home.css";
import { Images } from "../theme/Images";

const NewHome: React.FC = () => {
    const [team, setTeam] = useState<string>("");
    return (
      <IonPage>
        <IonContent>
          <div
            className="list-container"
            style={
              team !== ""
                ? {
                    backgroundImage: `url(${Images[team]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    // backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }
                : {}
            }
          >
            <ScrollList setTeam={setTeam} />
          </div>
        </IonContent>
      </IonPage>
    );
};

export default NewHome;
