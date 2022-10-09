import React, { useState } from "react";

export default function TextForm(props) {
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
            style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container"  style={{color: props.mode==='light'?'black':'white'}} >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length - 1} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text above to preview it here"}</p>
      </div>
    </>
  );
}
