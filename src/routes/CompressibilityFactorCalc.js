import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Compressibility.css';

function CompressibilityFactor(){
    let [pressure, setpressure] = useState('');
    let [volume, setvolume] = useState('');
    let [molesNum, setmolesNum] = useState('');
    let [gasConst, setgasConst] = useState('');
    let [temp, settemp] = useState('');

    let [pressureUnit, setpressureUnit] = useState('');
    let [volumeUnit, setvolumeUnit] = useState('');
    let [molesNumUnit, setmolesNumUnit] = useState('mol');
    let [gasConstUnit, setgasConstUnit] = useState('');
    let [tempUnit, settempUnit] = useState('');

    let [result, setResult] = useState('');

    function getCompressibilityFactor(){
        let temp1 = Number(pressure);
        let temp2 = Number(volume);
        let temp3 = Number(molesNum);
        let temp4 = Number(gasConst);
        let temp5 = Number(temp);
        let tempResult = 0;


        if(pressureUnit==="atm"){
            setvolumeUnit("liters")
            setmolesNumUnit("mol")
            setgasConstUnit("L⋅atm/mol⋅K")
            settempUnit("K")
            console.log("atmmmmm")
        }else{
            if(pressureUnit==="pa"){
                setvolumeUnit("m3")
                setmolesNumUnit("mol")
                setgasConstUnit("m3⋅pa/K⋅mol")
                settempUnit("K")
                console.log("paaaaa")

            }else{
                if(pressureUnit==="bar"){
                    setvolumeUnit("liters")
                    setmolesNumUnit("mol")
                    setgasConstUnit("L⋅bar/K⋅mol")
                    settempUnit("K")
                    console.log("baaaar")

                }else{
                    console.log(pressureUnit+''+volumeUnit)
                    setResult("Incorrect combination of inputs!")
                }
            }
        }
        tempResult = (temp1*temp2)/ ((temp3*temp4)*temp5)
        setResult(tempResult.toFixed(5))
        setpressure('');
        setvolume('');
        setmolesNum('');
        setgasConst('');
        settemp('');

    }

    return (
        <div className="bg">
            <header className="title">
                <h1 >Compressibility Factor Calculator</h1>
            </header>

            <body  className="body">
                        <form>
                            <label className="input">
                                Pressure: 
                                <input 
                                    type="number" 
                                    onChange={(e) => setpressure(e.target.value)}/>
                                <select onChange={(e) => setpressureUnit(e.target.value)}>
                                    <option value="bar">bar</option>
                                    <option value="pa">pa</option>
                                    <option value="atm">atm</option>
                                </select>
                            </label>
                        </form>
                    
                        <form>
                            <label className="input">
                                Volume    
                                <input 
                                    type="number" 
                                    onChange={(e) => setvolume(e.target.value)}/>
                                <input className="unit" value={volumeUnit}/>
                            </label>
                        </form>
                        <form>
                            <label className="input">
                                Number of Moles    
                                <input 
                                    type="number" 
                                    onChange={(e) => setmolesNum(e.target.value)}/>
                                <input className="unit" value={molesNumUnit}/>
                            </label>
                        </form>
                        <form>
                            <label className="input">
                                Gas Constant    
                                <input 
                                    type="number" 
                                    onChange={(e) => setgasConst(e.target.value)}/>
                                <input className="unit" value={gasConstUnit}/>
                            </label>
                        </form>
                        <form>
                            <label className="input">
                                Temperature   
                                <input 
                                    type="number" 
                                    onChange={(e) => settemp(e.target.value)}/>
                                <input className="unit" value={tempUnit}/>
                            </label>
                        </form>
                        <button className="button"
                            onClick={getCompressibilityFactor}
                        >
                        SUBMIT
                        </button>
                                
                        <form>
                            <label>
                                CompressibilityFactor: <input className="result" value={result}/>
                            </label>
                        </form>
               
            </body>
        </div>
    );
}

export default CompressibilityFactor;
