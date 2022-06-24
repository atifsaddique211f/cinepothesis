import "./ScoreBoard.css";

export default function ScoreBoard({ score }) {
  return (
    <div className="ScoreBoard">
      <div className="ScoreTeamOne">Team 1: {score}</div>
      <div className="ScoreTeamTwo">Team 2: 0</div>
    </div>
  );
}
