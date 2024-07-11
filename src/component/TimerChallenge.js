import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const modal = useRef();
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerexpired, setTimerExpired] = useState(false);

  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const timerIsActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;
  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    modal.current.open();
  }
  const handleReset = () => {
    setTimerRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      // setTimerExpired(true);
      setTimerRemaining((prevTimerRemaining) => prevTimerRemaining - 10);

      // modal.current.open();
    }, 10);
    // setTimerStarted(true);
  };
  const handleStop = () => {
    clearInterval(timer.current);
    modal.current.open();
  };

  return (
    <>
      <ResultModal
        ref={modal}
        targetTime={targetTime}
        timerRemaining={timerRemaining}
        handleReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className='"challenge-time'>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="avtive">
          {timerIsActive ? "Time is Running...." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
