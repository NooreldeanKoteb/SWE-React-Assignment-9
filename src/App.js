import React from "react";

import "./styles.css";
export default function App() {
  const [draft, setDraft] = React.useState("");

  let words = [];
  let word = "";
  let pos = 0;

  function format(text) {
    words = text.split("\n");
    document.getElementById("out").value = words;
  }

  function reset() {
    document.getElementById("out").value = "";
    document.getElementById("in").value = "";
    words = [];
  }

  function replace() {
    pos = Math.floor(Math.random() * words.length);
    word = words[pos];
    if (word && word.length > 0) alert(word);
    document.getElementById("out").value = words;
  }

  function noReplace() {
    pos = Math.floor(Math.random() * words.length);
    word = words.splice(pos, 1);
    if (word && word.length > 0) alert(word);
    document.getElementById("out").value = words;
  }

  return (
    <div>
      <h1> Assignment 9</h1>
      <p>
        Instructions: Input one word per line then press submit. After that you
        have the option of picking a word with or without replacement.
      </p>
      <textarea
        placeholder="Please Enter Words Here..."
        id="in"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
      ></textarea>

      <textarea placeholder="Words Left" id="out" disabled></textarea>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => format(draft)}>Submit</button>
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => replace()}>With replacement</button>

      <button onClick={() => noReplace()}>without replacement</button>
      <br />
      <br />
      <br />
      <br />
      <h1> Contributions</h1>
      <p>
        This assignment was a joint collaboration between Saim Sandhu, Abdallah
        Soliman, and Nooreldean Koteb. Nooreldean and Abdallah coded the the
        main features, and Saim guided them through the requirements and wrote
        the collaboration summary.
      </p>
      <p>
        SWEGang<sup>©</sup> 2020. All Rights (NOT) Reserved..... maybe....
        perhaps
      </p>
      <img
        src="https://i.pinimg.com/originals/b6/d0/61/b6d0618441840d0f4522cecbef21701e.png"
        alt="maybe"
      />
    </div>
  );
}
