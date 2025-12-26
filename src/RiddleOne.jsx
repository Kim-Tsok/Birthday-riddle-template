import RiddleTemplate from "./RiddleTemplate";

const RiddleOne = () => (
  <RiddleTemplate
    title="Riddle One"
    riddleText="This is where you the riddle question is mean to be"
    correctAnswer="answer"
    // The next link is for the url. You advised to make it non sequential so that the user can't just skip riddles
    // These links must also correspond with the routes in the 'App.jsx'
    nextLink="/r2"
  />
);

export default RiddleOne;
