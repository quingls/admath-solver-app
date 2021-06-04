import React, { useState} from "react";
// import { Container, Row, Col } from 'react-bootstrap';
import './MachNum.css'

function MachNum(){
    let [objSpeed, setobjSpeed] = useState('');
    let [sndSpeed, setsndSpeed] = useState('');
    let [result, setResult] = useState('');
    let [objSpeedUnit, setobjSpeedUnit] = useState('');
    let [sndSpeedUnit, setsndSpeedUnit] = useState('');

    function getMach(){
        let temp1 = objSpeed;
        let temp2 = sndSpeed;
        let tempResult = 0;
        console.log(objSpeedUnit)
        console.log(sndSpeedUnit)

        if(objSpeedUnit===sndSpeedUnit){
            tempResult = temp1/temp2
            setResult(tempResult)
            console.log(tempResult)
        }else{
            if(temp1 === 0){
                setResult("UNDEFINE")
            }else{
                console.log('mismatched temperature unit')
                console.log(objSpeedUnit+''+sndSpeedUnit)
                setResult("Incorrect combination of inputs!")
            }
        }
        
        setobjSpeed('');
        setobjSpeedUnit('');
        setsndSpeed('');
        setsndSpeedUnit('');
    }

    return (
        <div className="bg">
            <header className="title">
                <h1 >Mach Number Calculator</h1>
            </header>

            <body  className="body">
                        <form>
                            <label className="input1">
                                Speed of Object
                                <input 
                                    type="number" 
                                    value={objSpeed}
                                    onChange={(e) => setobjSpeed(e.target.value)}/>
                                <select onChange={(e) => setobjSpeedUnit(e.target.value)}>
                                    <option value="ms">m/s</option>
                                    <option value="km/kmh">km/h</option>
                                    <option value="fts">ft/s</option>
                                    <option value="mph">mph</option>
                                    <option value="kms">km/s</option>
                                    <option value="knots">knots</option>
                                </select>
                            </label>
                        </form>
                    
                        <form>
                            <label className="input2">
                                Speed of Sound     
                                <input 
                                    type="number" 
                                    value={sndSpeed}
                                    onChange={(e) => setsndSpeed(e.target.value)}/>
                                <select  onChange={(e) => setsndSpeedUnit(e.target.value)}>
                                    <option value="ms">m/s</option>
                                    <option value="km/kmh">km/h</option>
                                    <option value="fts">ft/s</option>
                                    <option value="mph">mph</option>
                                    <option value="kms">km/s</option>
                                    <option value="knots">knots</option>
                                </select>
                            </label>
                        </form>
                        <button className="button"
                            onClick={getMach}
                        >
                        SUBMIT
                        </button>
                                
                        <form>
                            <label>
                                Mach Number: <input className="result" value={result}/>
                            </label>
                        </form>
            </body>
        </div>
    );
}

export default MachNum;
