import React, { useState } from "react";
import './Layout.css';
import Output from "./output";

const Layout=(props)=>{

    let [input,setInput] = useState('0');
    let [result,setResult] = useState(' ');

    const handleClick=(event)=>{

        const value = event.target.value;

        if(value === '='){
            if(input!==''){
                let res = ''
                try{
                    res=eval(input)
                }catch(err){
                    setResult("Math Error")
                }
                if(res==undefined){
                    setResult("Math Error")
                }
                else{
                    setResult(input + '=')
                    setInput(res)
                }
            }
        }
        else if(value === "C"){
            setInput('')
            setResult('')
        }
        else if(value === "DEL"){
            let str= input
            str = str.substring(0,str.length-1)
            setInput(str)
        }
        else if(value === '0'){
            setInput(value)
        }
        else{
            setInput((input +=value))
        }

    }

    return(
        <div className="frame">

        <Output user={input} answer={result} />

            <div className="calculator">
                <input type="button" value={"C"} className="clear-button" onClick={handleClick}></input>
                <input type="button" value={"DEL"} className="clear-button" onClick={handleClick}></input>
                <input type="button" value={"%"} className="operator" onClick={handleClick}></input>
                <input type="button" value={"/"} className="operator" onClick={handleClick}></input>
<br/>
                <input type="button" value={"7"} className="clear-button" onClick={handleClick}></input>
                <input type="button" value={"8"} className="clear-button" onClick={handleClick}></input>
                <input type="button" value={"9"} className="clear-operator" onClick={handleClick}></input>
                <input type="button" value={"*"} className="operator" onClick={handleClick}></input>
<br/>
                <input type="button" value={"4"} className="clear-button" onClick={handleClick}></input>
                <input type="button" value={"5"} className="clear-button" onClick={handleClick}></input>
                <input type="button" value={"6"} className="clear-operator" onClick={handleClick}></input>
                <input type="button" value={"-"} className="operator" onClick={handleClick}></input>
<br/>
                <input type="button" value={"1"} className="clear-button" onClick={handleClick}></input>
                <input type="button" value={"2"} className="clear-button" onClick={handleClick}></input>
                <input type="button" value={"3"} className="clear-operator" onClick={handleClick}></input>
                <input type="button" value={"+"} className="operator" onClick={handleClick}></input>
<br/>
               
                <input type="button" value={"0"} className="clear-button" onClick={handleClick}></input>
                <input type="button" value={"."} className="clear-operator" onClick={handleClick}></input>
                <input type="button" value={"="} className="operator" onClick={handleClick}></input>
                
            </div>
        </div>
    )
}

export default Layout;