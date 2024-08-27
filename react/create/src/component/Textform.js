import { useState } from "react"
import React  from 'react' 



export default function Textform() {
  const [index, setIndex] = useState('inter text here'); 
  const handleupclick = ()=>{
    // console.log("uppertext"+index)
    let newtext = index.toUpperCase();
  
    setIndex(newtext);

  }
  const lowercase = ()=>{
    // console.log("uppertext"+index)
    let newtext = index.toLocaleLowerCase();
  
    setIndex(newtext);
  
  
  }
  const clearContent = ()=>{
    // console.log("uppertext"+index)
    let newtext ="";
  
    setIndex(newtext);
//     function clearContent()
// {
//     document.getElementById("output").value='';
// }
  
  
  }
  const handlecoppy =()=>{
    let text = document.getElementById("floatingTextarea2");
    // text.Selected();
    navigator.clipboard.writeText(text.value)
  
  }
  const handlespace = ( )=> {
    let newtext = index.split(/[  ]+/);
    setIndex(newtext.join(" "))
  }
  
  const handleonchange = (Event)=>{
    // console.log("handle on click change");
    setIndex(Event.target.value);
    

  }


  return (

    <>
   
      <div className='textarea'>
        <h2>Input with value</h2>


        <div className="form-floating">
          <textarea className="form-control"  value={index} onChange={handleonchange} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
          {/* <label for="floatingTextarea2">Comments</label> */}
        </div>
        <br />
        <div>
         
          <button type="button" onClick={handleupclick} className="btn btn-primary mx-4">Upper Text</button>
          <button type="button" onClick={lowercase} className="btn btn-primary mx-4">Lower test</button>

          <button type="button" onClick={clearContent} className="btn btn-primary mx-4">Clear Text</button>
          <button type="button" onClick={handlecoppy} className="btn btn-primary mx-4">coppy Text</button>
          <button type="button" onClick={handlespace} className="btn btn-primary mx-4">space remove Text</button>
        </div>

      </div>

<div className="textarea">
  <h1>Your Text Summary</h1>
  <p>{index.split("").length} words and {index.length} characters.</p> 
  <h2>Preview</h2>
  <p>{index}</p>

</div>

    </>

  )
}
