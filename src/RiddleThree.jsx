import RiddleTemplate from "./RiddleTemplate";

const RiddleThree = () => (
  <RiddleTemplate
    title="Riddle Three"
    riddleText="Just use the riddle template"
    correctAnswer="answer"
    // The next link is for the url. You advised to make it non sequential so that the user can't just skip riddles
    nextLink="/rend"
  />
);

export default RiddleThree;
