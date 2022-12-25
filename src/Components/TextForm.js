import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text, setText] = useState("")

    //No of characters without space
    function characterWithoutSpace(){
        let cnt = 0;
        for(let i = 0; i<text.length; i++){
            if(text[i] === ' '){
                cnt++;
            }
        }
        return (text.length-cnt)
    }

    function noOfWords(){
        let count = 0;
        let words = text.split(' ').length;
        if(text.length === 0) return 0
        for(let i=0; i<text.length; i++){
            if(text[i] === ' '){
                while(text[i] === ' '){
                    if(text[i] === text[i+1]) count++;
                    i++;
                }
                i -= 1;
            }
        }
        if(text.slice(-1) === ' ') return (words-count-1)
        else return (words-count)
    }

    //No of sentences in the text
    function noOfSentences(){
        let sentences = text.split('.').length
        if(text.length === 0) return 0
        if(text.slice(-1) === '.') return sentences-1
        else if(text.slice(-1) === ' ') return sentences-1
        else return sentences
    }

    const handleUpClick = ()=>{
        const newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowClick = ()=>{
        const newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        let newText = document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }

    const handleClearText = () => {
        setText("")
    }

    const handleExtraSpace = () => {
        let regexPattern = /\s+/g
        let newText = text.replace(regexPattern, " ")
        setText(newText)
    }

    //clear extra space

    return (
        <>
            <h1 className={`mb-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="5"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy to clipboard</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove extra space</button>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h1>Your text summary</h1>
                <p>{noOfWords()} words {text.length} characters(including spaces)</p>
                <p>{characterWithoutSpace()} characters(excluding spaces)</p>
                <p>{noOfSentences()} sentences</p>
                <p>{0.008 * characterWithoutSpace()} Minutes</p>
                <h2>Preview</h2>
                <p>{(text.length > 0) ? text : "Nothing to preview - use TextUtils"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading : PropTypes.string
}