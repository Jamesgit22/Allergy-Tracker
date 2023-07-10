import React from "react";
import UserButtons from "../../components/buttons/UserButtons";

export default function splash() {
  return (
    <>
      <div id="splash-container" className="mt-20 pt-20 min-h-full">
        <div className="white-bg mx-auto w-11/12 rounded-lg border drop-shadow-xl px-5">
          <h2 className="light-txt pt-5 text-center text-6xl">AllerTrack</h2>
          <p className="mt-5 pe-3 ps-3 text-center">
            Stop guessing and start{" "} <br></br>
            <span className="mint-txt text-xl font-bold">knowing</span><br></br>  what you{" "}
            can eat with<br></br>{" "}
            <span className="font-bold text-2xl mint-txt">AllerTrack</span>!
          </p>
          <div className="signin-up mb-5 flex justify-evenly pt-10">
            <UserButtons
              isGreen={true}
              isBlue={false}
            />
            
          </div>
        </div>
      </div>
    </>
  );
}
