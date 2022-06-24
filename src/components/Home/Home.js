import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
    navigate(`/setup`);
  };

  return (
    <div className="Home">
      <div className="Content">
        <div className="ColumnWrapper">
          <img src="./cinepothesis-logo.png" alt="Cinepothesis Logo" />
          <p>The Official Movie Guessing Game</p>
        </div>
        <form onSubmit={handleSubmit} className="ColumnWrapper Form">
          <input onChange={handleChange} placeholder="Enter your name" />
          <button className="Button">CREATE GAME</button>
        </form>
      </div>
    </div>
  );
}
