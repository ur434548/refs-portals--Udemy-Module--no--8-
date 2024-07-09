import { useState, useRef } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState(null);
  const user = useRef();

  // Via states

  //   const [newName, setnewName] = useState(false);
  //   const handlechange = (event) => {
  //     setnewName(false);
  //     setEnteredName(event.target.value);
  //   };
  const handleClick = () => {
    setEnteredName(user.current.value);
    user.current.value = "";
  
  };
  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={user} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
