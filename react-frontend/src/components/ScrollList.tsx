import { IonItem, IonLabel, IonList } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { TEAMS } from "../Teams";
import "./ScrollList.css";

interface ScrollListProps {
  setTeam: (team: string) => void;
}

const ScrollList: React.FC<ScrollListProps> = ({ setTeam }) => {
  const listRef = useRef<HTMLIonListElement>(null);
  const [dragging, setDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState<number | null>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!dragging || dragStartY === null) return;
      const list = listRef.current as HTMLElement;
      const itemHeight = list.querySelector("ion-item")!.offsetHeight;
      const scrollTop = list.scrollTop;
      const deltaY = e.clientY - dragStartY;
      const middleIndex = Math.ceil(scrollTop / itemHeight);
      const prevIndex = middleIndex - 1;
      const newIndex = middleIndex - Math.round(deltaY / itemHeight);
      const items = list.querySelectorAll("ion-item");
      const middleItem = items[middleIndex];
      const prevItem = items[prevIndex];
      const nextItem = items[middleIndex + 1];
      const itemCount = items.length;

      if (newIndex < 0) {
        list.scrollTop = 0;
      } else if (newIndex >= itemCount) {
        list.scrollTop = itemCount * itemHeight;
      } else {
        list.scrollTop = newIndex * itemHeight;
      }

      // bold text effect
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

      e.preventDefault();
    }

    function handleMouseUp(e: MouseEvent) {
      setDragging(false);
      const list = listRef.current as HTMLElement;
      const items = list.querySelectorAll("ion-item");
      const itemHeight = items[0].offsetHeight;
      const upperIndex = Math.ceil(list.scrollTop / itemHeight);
      const middleIndex = upperIndex + 1;
      const prevIndex = middleIndex - 1;
      const middleItem = items[middleIndex];
      const prevItem = items[prevIndex];
      const nextItem = items[middleIndex + 1];

      // bold text effect
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
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);


    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseUp);
    };
  }, [dragging, dragStartY, setTeam]);

  function handleMouseDown(e: React.MouseEvent) {
    setDragStartY(e.clientY);
    setDragging(true);
  }

  return (
    <IonList
      class="scroll-list draggable"
      ref={listRef}
      onMouseDown={handleMouseDown}
    >
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



