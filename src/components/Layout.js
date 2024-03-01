import React, { useState } from "react";
import './Layout.css';
import Output from "./output";

const Layout = (props) => {

    let [input, setInput] = useState('0');
    let [result, setResult] = useState(' ');

    const handleClick = (event) => {

        const value = event.target.value;

        if (value === '=') {
            if (input !== '') {
                let res = ''
                try {
                    res = eval(input)
                } catch (err) {
                    setResult("Math Error")
                }
                if (res == undefined) {
                    setResult("Math Error")
                }
                else {
                    setResult(input + '=')
                    setInput(res)
                }
            }
        }

        else if (value === "C") {
            setInput(' ')
            setResult('')
        }
        else if (value === "DEL") {
            try{
            setInput(input.slice(0, -1));
            }
            catch(error){
                document.write("Math Error");
            }

        }
        else if (value === '0') {
            setInput(value)
        }
        else {
            setInput((input += value))
        }


    }

    return (
        <div className="frame row p-0 m-0">

            <div className="cal-body">
                <Output user={input} answer={result} />

                <div className="col-12 col-md-8 col-lg-12 mx-auto  calculator">
                    <input type="button" value={"C"} className="button operator" onClick={handleClick}></input>
                    <input type="button" value={"DEL"} className="button operator" onClick={handleClick}></input>
                    <input type="button" value={"%"} className="button operator" onClick={handleClick}></input>
                    <input type="button" value={"/"} className="button operator" onClick={handleClick}></input>
                    <br />
                    <input type="button" value={"7"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"8"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"9"} className="button " onClick={handleClick}></input>
                    <input type="button" value={"*"} className="button operator " onClick={handleClick}></input>
                    <br />
                    <input type="button" value={"4"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"5"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"6"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"-"} className="button operator" onClick={handleClick}></input>
                    <br />
                    <input type="button" value={"1"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"2"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"3"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"+"} className="button operator" onClick={handleClick}></input>
                    <br />
                    <input type="button" value={"00"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"0"} className="button" onClick={handleClick}></input>
                    <input type="button" value={"."} className="button operator" onClick={handleClick}></input>
                    <input type="button" value={"="} className="button operator equal" onClick={handleClick}></input>

                </div>
            </div>
        </div>
    )
}

export default Layout;