import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Carnot.css';

function CarnotEfficiency () {
    let [coldTemp, setColdTemp] = useState('');
    let [hotTemp, setHotTemp] = useState('');
    let [result, setResult] = useState('');
    let [coldTempUnit, setColdUnit] = useState('');
    let [hotTempUnit, setHotUnit] = useState('');
    let [resultUnit, setresultUnit] = useState('%');

    function getEfficiency(){
        let temp1 = Number(coldTemp);
        let temp2 = Number(hotTemp);
        let tempResult = 0;
        let tempres1 = 0;
        let tempres2 = 0;

        if(coldTempUnit==="celcius"){
            setHotUnit("°C");
            tempResult = (((temp2-temp1)/(temp2+273.15))*100)
            setResult(tempResult.toFixed(5))
            console.log(tempResult)
        }else if (coldTempUnit==="farenheit"){
            setHotUnit("°F");
            tempResult = ((((temp2-32)*(5/9)+273.15)-((temp1-32)*(5/9)+273.15))/((temp2-32)*(5/9)+273.15)*100)
            setResult(tempResult.toFixed(5))
            console.log(tempResult)
        }else if (coldTempUnit==="kelvin"){
            setHotUnit("K");
            tempres1 = (temp2-temp1)
            console.log(tempres1)
            tempResult = (tempres1/temp2*100)
            setResult(tempResult.toFixed(5))
            console.log(tempResult)                
        }else if (temp1===temp2){
            setResult("0")
        }
    
        setColdTemp('');
        setColdUnit('');
        setHotTemp('');

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
                        <input className="unit" value={hotTempUnit}/>
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
                        <input className="unit" value={resultUnit}/>
                    </label>
                </form>
               
            </body>
        </div>
    );
}

export default CarnotEfficiency;