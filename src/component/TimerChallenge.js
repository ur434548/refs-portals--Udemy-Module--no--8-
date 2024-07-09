import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerexpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const modal = useRef();
  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      modal.current.showModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      <ResultModal ref={modal} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>

        <p className='"challenge-time'>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="avtive">
          {timerStarted ? "Time is Running...." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
