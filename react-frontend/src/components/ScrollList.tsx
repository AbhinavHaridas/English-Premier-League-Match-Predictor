import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React, { useEffect, useRef } from "react";
import { TEAMS } from "../Teams";
import "./ScrollList.css";

interface ScrollListProps {
  setTeam: (team: string) => void;
}

const ScrollList: React.FC<ScrollListProps> = ({ setTeam }) => {
  const listRef = useRef<HTMLIonListElement>(null);

  const handleScroll = () => {
    const list = listRef.current as HTMLElement;
    const items = list.querySelectorAll("ion-item");
    const itemHeight = items[0].offsetHeight;
    const middleIndex = Math.ceil(list.scrollTop / itemHeight);
    const prevIndex = middleIndex - 1;
    const middleItem = items[middleIndex];
    const prevItem = items[prevIndex];
    const nextItem = items[middleIndex + 1];

    if (prevItem && prevItem.classList.contains("middle-item")) {
      prevItem.classList.remove("middle-item");
    }

    if (
      nextItem &&
      nextItem.classList.contains("middle-item")
    ) {
      nextItem.classList.remove("middle-item");
    }

    middleItem && middleItem.classList.add("middle-item");
    setTeam(middleItem.innerText);
    // console.log(middleItem.innerText);
  };

  return (
    <IonList class="scroll-list" ref={listRef} onScroll={handleScroll}>
      <IonItem>
        <IonLabel></IonLabel>
      </IonItem>
      {TEAMS.map((team) => (
        <IonItem key={team} className="list-item">
          <IonLabel>{team}</IonLabel>
        </IonItem>
      ))}
      <IonItem>
        <IonLabel></IonLabel>
      </IonItem>
    </IonList>
  );
};

export default ScrollList;
