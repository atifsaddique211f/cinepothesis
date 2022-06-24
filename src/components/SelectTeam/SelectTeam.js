import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./SelectTeam.css";

const Team = ({ name, users, classes }) => {
  return (
    <div className={`team ${classes}`}>
      <h2>{name}</h2>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-item">{user}</div>
        ))}
      </div>
    </div>
  );
};

const usersTeamA = ["Charlie", "James", "Atif", "Carlos"];
const usersTeamB = ["Nestor", "James F", "Kaio", "Janet"];
const SelectTeam = () => {
  const navigate = useNavigate();

  const onStartGameClick = () => {
    navigate("/guess");
  };

  return (
    <div className="select-teams-page">
      <Header />
      <div>
        <button className="Button">COPY ROOM LINK</button>
      </div>
      <div className="teams-section">
        <Team name="Team A" classes="team-a" users={usersTeamA} />
        <div className="teams-section-divider"></div>
        <Team name="Team B" classes="team-b" users={usersTeamB} />
      </div>
      <div className="bottom-section" align="center">
        <button className="Button" onClick={onStartGameClick}>
          start game
        </button>
      </div>
    </div>
  );
};

export default SelectTeam;
