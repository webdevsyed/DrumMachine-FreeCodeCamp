import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(
    "Click on the drum pads below or press the letter on your keyboard."
  );

  useEffect(() => {
    function handleKeyDown(e) {
      if (
        [
          "q",
          "w",
          "e",
          "a",
          "s",
          "d",
          "z",
          "x",
          "c",
          "Q",
          "W",
          "E",
          "A",
          "S",
          "D",
          "Z",
          "X",
          "C"
        ].includes(e.key)
      ) {
        document.getElementById(e.key.toUpperCase()).play();
        setText(
          document
            .getElementById(e.key.toUpperCase())
            .parentElement.id.toUpperCase()
        );
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    //clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    function handleClick(e) {
      if (
        ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(
          e.target.textContent
        )
      ) {
        // console.log(e.target.id)
        document.getElementById(e.target.textContent).play();
        setText(e.target.id.toUpperCase());
      }
    }
    document.addEventListener("click", handleClick);
    //clean up
    return function cleanup() {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="App" id="drum-machine">
      <h1>DrumMachine</h1>
      <div id="display">{text}</div>
      <div className="box">
        <div className="drum-pad" id="heater-1">
          <audio
            id="Q"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            preload="true"
          ></audio>
          Q
        </div>
        <div className="drum-pad" id="heater-2">
          <audio
            id="W"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            preload="true"
          ></audio>
          W
        </div>
        <div className="drum-pad" id="heater-3">
          <audio
            id="E"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            preload="true"
          ></audio>
          E
        </div>
        <div className="drum-pad" id="heater-4">
          <audio
            id="A"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            preload="true"
          ></audio>
          A
        </div>
        <div className="drum-pad" id="clap">
          <audio
            id="S"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            preload="true"
          ></audio>
          S
        </div>
        <div className="drum-pad" id="open-hh">
          <audio
            id="D"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            preload="true"
          ></audio>
          D
        </div>
        <div className="drum-pad" id="kick-n-hat">
          <audio
            id="Z"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            preload="true"
          ></audio>
          Z
        </div>
        <div className="drum-pad" id="kick">
          <audio
            id="X"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            preload="true"
          ></audio>
          X
        </div>
        <div className="drum-pad" id="closed-hh">
          <audio
            id="C"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            preload="true"
          ></audio>
          C
        </div>
      </div>
    </div>
  );
}

export default App;
