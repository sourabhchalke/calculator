import React from "react";
import './Outputrow.css';

const Outputrow=props=>{
    return(
        <div>
            <input type="text" readOnly className="screen" style={props.textSize} value={props.value}></input>
        </div>
    )
}

export default Outputrow;