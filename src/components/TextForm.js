import React, {useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {

  const changed = (event)=> {
    console.log("Changed");
    changedText(event.target.value)
  }

  const clicked = () => {
    console.log("Clicked" + text);
    let newText = text.toUpperCase();
    changedText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }

  const capitalize = () => {
    console.log("capitalize" + text);
    let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    changedText(newText);
    props.showAlert("Capitalize the text!", "success");

}

  const Clear = () => {
    console.log("clear" + text);
    let newText = "";
    changedText(newText);
    props.showAlert("Text Cleared!", "success");
  } 

  const loClicked = () => {
    console.log("loClicked" + text);
    let newText = text.toLowerCase();
    changedText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }
  const [text, changedText] = useState('')

  const copyText = () => {
    var copy = document.getElementById("myTextArea", "success");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    props.showAlert("Copied to clipboard!", "success");
  }

  const exSpaces = () => {
    let newText = text.split(/[  ]+/);
    changedText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  return (
    <>
       

<form className="max-w-[50%] mx-auto mt-[120px]" style={{color: props.mode === "white" ? "black" : "white"}}>
  <div className="mb-5">
    <h1 className="text-[29px] mb-[20px] font-bold">{props.textArea}</h1>
    <textarea placeholder='Enter Your Text Here!' value={text} onChange={changed} id="myTextArea" style={{background : props.mode === "white" ? "white" : "black", color: props.mode === "white" ? "black" : "white"}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-y-scroll">
    </textarea>
    <div className="grid grid-cols-4">
      <button type="button" onClick={clicked} className="w-[150px] h-[40px] mt-[20px] border-[2px] rounded-[20px] text-[white] bg-blue-700 hover:bg-blue-800">Uppercase Text</button>
      <button type='button' onClick={loClicked} className="w-[150px] h-[40px] mt-[20px] border-[2px] rounded-[20px] text-[white] bg-blue-700 hover:bg-blue-800">Lowercase Text</button>
      <button type='button' onClick={capitalize} className="w-[150px] h-[40px] mt-[20px] border-[2px] rounded-[20px] text-[white] bg-blue-700 hover:bg-blue-800">Capitalize Text</button>
      <button type='button' onClick={exSpaces} className="w-[170px] h-[40px] mt-[20px] border-[2px] rounded-[20px] text-[white] bg-blue-700 hover:bg-blue-800">Remove Extra Spaces</button>
      <button type='button' onClick={copyText} className="w-[150px] h-[40px] mt-[20px] border-[2px] rounded-[20px] text-[white] bg-blue-700 hover:bg-blue-800">Copy Text</button>
      <button type='button' onClick={Clear} className="w-[150px] h-[40px] mt-[20px] border-[2px] rounded-[20px] text-[white] bg-blue-700 hover:bg-blue-800">Clear Text</button>
    </div>
  </div>
<div>
  <h1  className="text-[24px] mb-[20px] font-semibold">Your Text Summary</h1>
  <p>{text.split(" ").length} Words and {text.length} Characters</p>
  <p>{0.008*text.split(" ").length} Minutes Read</p>
  <h1 className="text-[24px] mb-[20px] font-semibold mt-[10px]">Preview</h1>
  <p className="mb-[20px]">{text.length > 0 ? text : "Enter your text above to preview it in the textbox"}</p>
</div>
</form>


    </>
  )
}

TextForm.propTypes = {
  textArea : PropTypes.string.isRequired,
}

TextForm.defaultProps = {
  textArea : "This is your Text Area",
}