import cake from "/Birthday Cake.png";
import Pointing from "/Pointing.png";
import Bulb from "/Light Bulb.png";
import { useState } from "react";
import Popup from "./Popup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <img src={cake} alt="Birthday Cake" width="60" height="60" />
      <h1 className="mt-3 font-bold text-center w-screen">
        Happy Birthday <br /> Person
      </h1>
      <p className="text-center mt-7">
        Congratulations! you've a year old, wishing you happy birthday. Anyways
        i have a present for you.
      </p>
      <button
        onClick={() => setShowPopup(true)}
        className="flex px-5 py-3 rounded-3xl bg-[#B569FF] text-white mt-7 items-center justify-center cursor-pointer"
      >
        <p className="text-white">Start Treasure Hunt</p>
        <img
          src={Pointing}
          alt="Pointing"
          width="30"
          height="30"
          className="ml-2"
        />
        {showPopup && (
          <Popup
            header="TIPS"
            bodyText={
              <ol className="text-left">
                <li>
                  1. All answers are something you know. They are from your life
                  and the things surrounding it, the riddles shouldn't be too
                  hard
                </li>
                <li>2. These riddle are all one word answers</li>
                <li>3. And lastly goodluck, matey</li>
              </ol>
            }
            headerColor={"text-[#B569FF]"}
            // The next link is for the url. You advised to make it non sequential so that the user can't just skip riddles
            // These links must also correspond with the routes in the 'App.jsx'
            link="/r1"
            linkText="START!"
            icon={Bulb}
          />
        )}
      </button>
    </>
  );
};

export default Home;
