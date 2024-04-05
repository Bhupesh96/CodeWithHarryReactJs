import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div classNameName="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Covert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Covert to lower case
        </button>
      </div>
      <div className="container my-3">
        <h2>Summary</h2>
        <p>
          {text.split(" ").length} words {text.length} characters.
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
