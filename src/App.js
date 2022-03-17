import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [question, setQuestion] = useState();
  const [form, setForm] = useState("hello");

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setForm((prevVal) => [...prevVal, val]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let params = encodeURIComponent(form);
    let uri = "https://8ball.delegator.com/magic/JSON/" + params;
    const response = fetch(uri)
      .then((response) => response.json())
      .then((json) => {
        setQuestion(json);
        setTimeout(() => {
          setQuestion("");
        }, 3000);
      });
  };

  return (
    <div className="App">
      <form>
        <label>
          Ask the Magic Eightball a question
          <div>
            <input
              type="text"
              name="question"
              id="question"
              onChange={handleChange}
            ></input>
            <button forhtml="question" type="sumbit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </label>
      </form>
      <div className="answer">{question && question.magic.answer}</div>
    </div>
  );
}

export default App;
