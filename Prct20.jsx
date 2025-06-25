import { useState } from "react";

function Prct20(){
    
    const [value,setvalue]=useState(["MBA","MCA"]);
    const [valuechange,setvaluechange]=useState("")
   
    function DataInputChange(e) {
         setvaluechange(e.target.value);
    }

    function AddItem(){
        setvaluechange();
        setvalue([...value,valuechange]);
    }
    
    function DeleteItem(e){
        const update=value.filter
    }
    
    return(
        <>
            <h1 style={{textAlign:"center"}}>LIST OF Item</h1>
            <div>
                <input type="text" name="name" onChange={DataInputChange}></input>
                <button onClick={AddItem}>Add</button>
            </div>
            <ol>
               {value.map((ele, i) => (
                <li value={i+1}>{ele} <button onClick={DeleteItem} style={{background:"red"}}>DELETE</button></li>
                ))}

            </ol>  
        </>
    )
}
export default Prct20;