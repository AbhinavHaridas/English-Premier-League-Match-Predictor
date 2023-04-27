import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { TeamDropDown } from "../components/TeamDropdown";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-wrap">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Select Teams</IonTitle>
            </IonToolbar>
          </IonHeader>
          {/* <ExploreContainer /> */}
          <TeamDropDown />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
