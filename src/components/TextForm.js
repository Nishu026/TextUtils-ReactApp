import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperCase = () => {
        // console.log("UpperCase Button Clicked!"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }

    const handleOnChange =(event)=>{
        // console.log("onChange");
        setText(event.target.value)
    }
    
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }

    const handleReverseText=()=>{
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Reversed Text","success")
    }

    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success")
    }

    const handleRemoveExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success")
    }

    const handleClearText=()=>{
        let newText ="";
        setText(newText);
        props.showAlert("Cleared Text","success")
    }

    const [text , setText] = useState("");
    // setText("Enter New Text Here");
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary my-3 mx-3" onClick={handleUpperCase}>Convert to Uppercase</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleLowerCase}>Convert to Lowercase</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleReverseText}>Reverse Text</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleClearText}>Clear Text</button>
   
   </div>
   <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
     <h2>Your Text Summary</h2>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} Minutes to Read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
   </div>
</>
  )
}


