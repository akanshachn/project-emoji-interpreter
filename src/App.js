import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😊": "Smiling Face with Smiling Eyes",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤣": "Rolling on the Floor Laughing"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    const emojiInput = event.target.value;
    var meaning = emojiDictionary[emojiInput];
    if (emojiInput === "") {
      meaning = "";
    } else if (meaning === undefined) {
      meaning = "we don't have this in the database yet!";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    var txtbox = document.getElementById("inputBox");
    txtbox.value = "";
  }
  return (
    <div className="App">
      <h1>emoji interpreter</h1>
      <input onChange={emojiInputHandler} id="inputBox"></input>
      <div className="meaningDiv">{meaning}</div>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
