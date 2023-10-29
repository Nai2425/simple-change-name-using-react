import React, { useState } from "react";

const Home = () => {
  const [yourName, setYourName] = useState(""); // Initialize yourName as an empty string
  const [name, setName] = useState("Your Name");

  const handleInputChange = (event) => {
    setYourName(event.target.value); // Update yourName when the input value changes
  }

  const buttonClicked = () => {
    setName(yourName); // Update the name when the user clicks the button
  }

  return (
    <>
      <div className="home">
        <h2>Change Name: <span className="react-name">React</span> </h2>

        <p className="name">Your Name Will appear Here: <span className="userName">{name}</span></p>
        <input type="text" value={yourName} onChange={handleInputChange} // Handle input changes
          placeholder="Input your name"
        />
        <button onClick={buttonClicked}>Submit</button>
      </div>
    </>
  );
}

export default Home;
