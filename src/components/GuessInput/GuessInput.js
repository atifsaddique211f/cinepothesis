import { useState } from "react";
import "./GuessInput.css";

export default function GuessInput({ onCorrectGuess, onSkip }) {
  const [guessText, setGuessText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setGuessText("");
    onCorrectGuess();
  };

  const onChange = (e) => {
    const text = e.target.value;
    setGuessText(text);
  };

  const onClickSkip = (e) => {
    e.preventDefault();
    onSkip();
  };

  return (
    <>
      <form className="GuessInput" onSubmit={onSubmit} onChange={onChange}>
        <input value={guessText} type="text" />
        <div className="GuessInputButtons">
          <button type="submit">Submit</button>
          <button className="skip" onClick={onClickSkip}>
            Skip
          </button>
        </div>
      </form>
    </>
  );
}
