import React, { useState } from "react";
export const Counting = () => {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  let charCount = text.length;


  function countWords(str) {
    let words = 0;
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/(\n)/g," ");
    if(text.length){
      words = str.split(" ").length;
      
    }
    return words
    
  }

  let wordcount = countWords(text);

  let spacecount = text.split(" ").length-1
  return (
    <div className="charContainer">
      {/* <div className="numberstat">
     <h1><strong>{charCount}</strong> Charectors and <strong>{wordcount}</strong> Words and <strong>{spacecount}</strong>  Spaces</h1>
      </div>
      <div className=" textareacontainer">
        <div className='comment'>
        <textarea
          name="counter"
          id="area"
          rows="10" 
          cols="100"
          onChange={handleChange}
          className='textinput'
        ></textarea>
        </div>
      </div> */}
    </div>
  );
};
