import { useState } from "react";

import "./GuessPage.css";
import Header from "../Header/Header";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import VideoClip from "../VideoClip/VideoClip";
import GuessInput from "../GuessInput/GuessInput";

const CORRECT_GUESS_POINTS = 100;
const SKIP_POINTS = -50;

export default function GuessPage() {
  const [score, setScore] = useState(0);
  const [clipIndex, setClipIndex] = useState(0);

  const onCorrectGuess = () => {
    setScore((prevScore) => prevScore + CORRECT_GUESS_POINTS);
    setClipIndex((clipIndex) => clipIndex + 1);
  };

  const onSkip = () => {
    setScore((prevScore) => prevScore + SKIP_POINTS);
    setClipIndex((clipIndex) => clipIndex + 1);
  };

  return (
    <>
      <div className="GuessPage">
        <Header />
        <ScoreBoard score={score} />
        <VideoClip clipIndex={clipIndex} />
        <GuessInput onCorrectGuess={onCorrectGuess} onSkip={onSkip} />
      </div>
    </>
  );
}
