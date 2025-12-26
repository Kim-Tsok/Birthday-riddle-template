import { useState } from "react";
import Popup from "./Popup";
import Green from "/Green Circle.png";
import Red from "/Red Circle.png";

const RiddleTemplate = ({ title, riddleText, correctAnswer, nextLink }) => {
  const [answer, setAnswer] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSolve = () => {
    const userAnsLower = answer.trim().toLowerCase();
    setIsCorrect(userAnsLower === correctAnswer.toLowerCase());
    setShowPopup(true);
  };

  const popupHeader = isCorrect ? "CORRECT" : "WRONG";
  const popupBody = isCorrect ? (
    <p>
      That was amazing, for an easy question <br /> * cough, cough *
    </p>
  ) : (
    <p>Womp! Womp! Womp! Do better</p>
  );

  const popupLink = isCorrect ? nextLink : null;
  const popupLinkText = isCorrect ? "Next Riddle" : "Try Again";

  return (
    <>
      <h1 className="mt-3 font-bold text-center w-screen">{title}</h1>
      <p className="text-center mt-7">{riddleText}</p>

      <input
        type="text"
        name="ans"
        id="ans"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="mt-7 border-2 border-white rounded-3xl p-[6px] px-4 outline-0 w-[90vw]"
      />

      <button
        onClick={handleSolve}
        className="flex px-5 py-3 rounded-3xl bg-[#B569FF] text-white mt-7 items-center justify-center cursor-pointer"
      >
        <p className="text-white">Solve</p>
      </button>

      {showPopup && (
        <Popup
          header={popupHeader}
          bodyText={popupBody}
          link={popupLink}
          linkText={popupLinkText}
          headerColor={isCorrect ? "text-green-500" : "text-red-500"}
          icon={isCorrect ? Green : Red}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default RiddleTemplate;
