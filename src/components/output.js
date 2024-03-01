import React from "react";
import Outputrow from './Outputrow';

const Output=(props)=>{
    return(
        <div>
            <Outputrow value={props.answer} textSize={{fontSize:"40px"}}  />
            <Outputrow value={props.user} textSize={{fontSize:"40px"}} />
        </div>
    )
}

export default Output;