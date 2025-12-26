import RiddleTemplate from "./RiddleTemplate";

const RiddleTwo = () => (
  <RiddleTemplate
    title="Riddle Two"
    riddleText="You can have multiple riddles, as much as you want"
    correctAnswer="answer"
    // The next link is for the url. You advised to make it non sequential so that the user can't just skip riddles
    nextLink="/r3"
  />
);

export default RiddleTwo;
