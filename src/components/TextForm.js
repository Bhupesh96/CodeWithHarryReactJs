import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
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
        <button className="btn btn-primary" onClick={handleUpClick}>Covert to upper case</button>
      </div>
    </>
  );
}
