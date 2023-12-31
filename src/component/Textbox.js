import React, { useState } from 'react'


export default function Textbox(props) {
    const [text, setText] = useState("Enter text here");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    const upperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const removeClick = () => {
        let newText = " ";
        setText(newText);
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        alert("Copied to Clipboard! successfully");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState("Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === '#212529') {
            setMyStyle({
                color: 'white',
                backgroundColor: '#212529'
            })
            setBtnText('Light Mode')
        }
        else {
            setMyStyle({
                color: '#212529',
                backgroundColor: 'white'
            })
            setBtnText('Dark Mode')
        }
    }

    return (
        <>
            <div className= 'p-3 my-3 rounded' style={myStyle}>

                <div className="container ">
                    <h3>{props.heading} </h3>
                    <div className='mb-3'>
                        <textarea className="form-control" id="Textarea" rows="5" value={text} onChange={handleOnChange}></textarea>
                    </div>

                    <button disabled={text.length === 0} className ='btn btn-warning my-2 mx-2' onClick={upperClick}> Uppercase</button>
                    <button disabled={text.length === 0} className ='btn btn-warning my-2 mx-2' onClick={lowerClick}> Lowercase</button>
                    <button disabled={text.length === 0} className ='btn btn-warning my-2 mx-2' onClick={removeClick}> Clear Text</button>
                    <button disabled={text.length === 0} className ="btn btn-warning my-2 mx-2" onClick={handleCopy}> Copy Text</button>
                    <button disabled={text.length === 0} className ="btn btn-warning my-2 mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>

                </div>

                <div className ='container mt-2'>
                    <h2>Text Summary</h2>
                    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words,
                     {text.length} Characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read </p>
                    <h3>Preview</h3>
                    <p>{text}</p>

                </div>
            </div>

            <div className='text-center '>
                <button className ='btn btn-success me-5' onClick={toggleStyle}>{btnText}</button>
            </div>
        </>
    )


}

