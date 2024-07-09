import React, { forwardRef } from "react";

const result = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your{result}</h2>
      <p>
        The Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You can stop the timer with <strong>X second left</strong>
      </p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default result;
