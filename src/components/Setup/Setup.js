import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Setup.css";

function Setting({ values, value = 0, label }) {
  const [index, setIndex] = useState(value);
  return (
    <div className="setting">
      <div className="label">{label}</div>
      <ul>
        {values.map((v, i) => (
          <li
            className={index === i ? "active" : ""}
            key={i}
            onClick={() => setIndex(i)}
          >
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Setup() {
  const navigate = useNavigate();

  const genres = ["All", "Comedy", "Action", "Horror", "Super-Hero"];
  const values = ["Year", "Name", "Direction", "Other"];
  const times = ["1m", "2m", "5m"];

  const nextPage = () => {
    navigate("/select-team");
  };

  return (
    <>
      <Header />
      <div class="page">
        <div className="setup">
          <h2 className="header">Game Setup</h2>
          <div className="spacer" />
          <section className="settings">
            <Setting values={genres} label="What genre of movie?" />
            <Setting values={values} label="What to guess?" />
            <Setting values={times} label="Time for round?" />
          </section>
          <div className="spacer" />
          <button onClick={nextPage} className="Button next">
            next
          </button>
        </div>
      </div>
    </>
  );
}
