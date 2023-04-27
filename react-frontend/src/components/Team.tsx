import React, { useState } from "react";
import ScrollList from "./ScrollList";
import "./../pages/Home.css";
import { Images } from "../theme/Images";

interface TeamProps {
  team: string;
  setTeam: (team: string) => void;
}

const Team: React.FC<TeamProps> = ({team,setTeam}) => {
  return (
    <div
      className="list-container"
      style={
        team !== ""
          ? {
              backgroundImage: `url(${Images[team]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {}
      }
    >
      <ScrollList setTeam={setTeam} />
    </div>
  );
};

export default Team;
