import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Carnot.css';

function CarnotEfficiency () {
    let [coldTemp, setColdTemp] = useState('');
    let [hotTemp, setHotTemp] = useState('');
    let [result, setResult] = useState('');
    let [coldTempUnit, setColdUnit] = useState('');
    let [hotTempUnit, setHotUnit] = useState('');

    function getEfficiency(){
        let temp1 = coldTemp;
        let temp2 = hotTemp;
        let tempResult = 0;
        console.log(coldTempUnit)
        console.log(hotTempUnit)

        if(coldTempUnit===hotTempUnit){
            if(coldTempUnit==='celcius'){
                tempResult = ((temp2+273.15)-(temp1+273.15)/(temp1*0.1))
                setResult(tempResult.toFixed(5))
                console.log(tempResult)
            }if (coldTempUnit==='farenheit') {
                tempResult = (((temp2-32)*(5/9)+273.15)-((temp2-32)*(5/9)+273.15)/((temp2-32)*(5/9)+273.15)*0.1)
                setResult(tempResult.toFixed(5))
                console.log(tempResult)
            } else {
                if (temp1===temp2){
                    setResult("0")
                }else{
                    tempResult = ((temp2-temp1)/temp2*0.1)
                    setResult(tempResult.toFixed(5))
                    console.log(tempResult)
                }
                
            }
        }else{
            console.log('mismatched temperature unit')
            console.log(coldTempUnit+''+hotTempUnit)
            setResult("Incorrect combination of inputs!")
        }
        setColdTemp('');
        setColdUnit('');
        setHotTemp('');
        setHotUnit('');

    }

    return (
        <div className="bg">
            <header className="title">
                <h1 >Carnot Efficiency Calculator</h1>
            </header>

            <body  className="body">
                        <form>
                            <label className="input1">
                                Cold Reservoir Temperature (Tc)
                                <input 
                                    type="number" 
                                    onChange={(e) => setColdTemp(e.target.value)}/>
                                <select onChange={(e) => setColdUnit(e.target.value)}>
                                    <option value="celcius">°C</option>
                                    <option value="farenheit">°F</option>
                                    <option value="kelvin">K</option>
                                </select>
                            </label>
                        </form>
                    
                        <form>
                            <label className="input2">
                                Hot Reservoir Temperature (Th)     
                                <input 
                                    type="number" 
                                    onChange={(e) => setHotTemp(e.target.value)}/>
                                <select onChange={(e) => setHotUnit(e.target.value)}>
                                    <option value="celcius">°C</option>
                                    <option value="farenheit">°F</option>
                                    <option value="kelvin">K</option>
                                </select>
                            </label>
                        </form>
                        <button className="button"
                            onClick={getEfficiency}
                        >
                        SUBMIT
                        </button>
                                
                        <form>
                            <label>
                                Efficiency: <input className="result" value={result}/>
                            </label>
                        </form>
               
            </body>
        </div>
    );
}

export default CarnotEfficiency;