import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./WaterFlowRate.css";

function WaterFlowRate(){
    let [pipeGrade, setpipeGrade] = useState('');
    let [pipeSize, setpipeSize] = useState('');
    let [pipeInnerDiameter, setpipeInnerDiameter] = useState('');
    let [waterVelocity, setwaterVelocity] = useState('');
    let [waterVelocityUnit, setwaterVelocityUnit] = useState('m/s');
    let [pipeInnerDiameterUnit, setpipeInnerDiameterUnit] = useState('mm');
    let [result, setResult] = useState('');
    let [resultUnit, setResultUnit] = useState('m^3/h');

    
    const piVal = Math.PI;

    function getDiameter(pipeGrade, pipeSize){
        if(pipeGrade==="jis-sgp"){
            if(pipeSize==="6A"){
                return 6.5;
            }else if(pipeSize==="8A"){
                return 9.2;
            }else if(pipeSize==="10A"){
                return 12.7;
            }else if(pipeSize==="15A"){
                return 16.1;
            }else if(pipeSize==="20A"){
                return 21.6;
            }else if(pipeSize==="25A"){
                return 27.6;
            }else if(pipeSize==="32A"){
                return 35.7;
            }else if(pipeSize==="40A"){
                return 41.6;
            }else if(pipeSize==="50A"){
                return 52.9;
            }else if(pipeSize==="65A"){
                return 67.9;
            }else if(pipeSize==="80A"){
                return 80.7;
            }else if(pipeSize==="100A"){
                return 105.3;
            }else if(pipeSize==="125A"){
                return 130.8;
            }else if(pipeSize==="150A"){
                return 155.2;
            }else if(pipeSize==="200A"){
                return 204.7;
            }else if(pipeSize==="250A"){
                return 254.2;
            }else if(pipeSize==="300A"){
                return 304.7;
            }else if(pipeSize==="350A"){
                return 339.8;
            }else if(pipeSize==="400A"){
                return 390.6;
            }else if(pipeSize==="450A"){
                return 441.4;
            }else{
                setpipeInnerDiameter("UNDEFINE")
            }
        }else{
            if(pipeSize==="DN6"){
                return 7; 
            }else if(pipeSize==="DN8"){
                return 9.9;
            }else if(pipeSize==="DN10"){
                return 13.6;
            }else if(pipeSize==="DN15"){
                return 17.3;
            }else if(pipeSize==="DN20"){
                return 22.3;
            }else if(pipeSize==="DN25"){
                return 28.5;
            }else if(pipeSize==="DN32"){
                return 37.2;
            }else if(pipeSize==="DN40"){
                return 43.1;
            }else if(pipeSize==="DN50"){
                return 54.5;
            }else if(pipeSize==="DN65"){
                return 70.3;
            }else if(pipeSize==="DN80"){
                return 82.5;
            }else if(pipeSize==="DN100"){
                return 107.1;
            }else if(pipeSize==="DN125"){
                return 131.7;
            }else if(pipeSize==="DN150"){
                return 159.3;
            }else if(pipeSize==="DN200"){
                return 207.3;
            }else if(pipeSize==="DN250"){
                return 260.4;
            }else if(pipeSize==="DN300"){
                return 309.7;
            }else if(pipeSize==="DN350"){
                return 339.6;
            }else if(pipeSize==="DN400"){
                return 388.8;
            }else if(pipeSize==="DN450"){
                return 437.2;
            }else{
                setpipeInnerDiameter("UNDEFINE")
            }
        }
    }
    
    function getWaterFlowRate(){
        let temp1 = pipeGrade;
        let temp2 = pipeSize;
        let temp3 = getDiameter(temp1, temp2)
        let temp4 = waterVelocity;
        let tempResult = 0;
        let tempres1 = 0;

        setpipeInnerDiameter(temp3);
        console.log("dia "+temp3)

        tempres1 = 3600 * piVal * temp4
        console.log(tempres1)
        tempResult = (tempres1*(((temp3/1000)/2))^2)
        console.log("res "+tempResult)
    
        setResult(tempResult.toFixed(5))
        // setpipeInnerDiameter('')
    };



    return (
        <div className="bg">
            <header className="title">
                <h1 >Water Flow Rate Calculator</h1>
            </header>

            <body  className="body">
                        <form>
                            <label className="input">
                                Pipe Grade: 
                                <select onChange={(e) => setpipeGrade(e.target.value)}>
                                    <option value="jis-sgp">JIS-SGP</option>
                                    <option value="din 2488">DIN 2488</option>
                                </select>
                            </label>
                        </form>
                        <form>
                            <label className="input">
                                Pipe Size: 
                                <select onChange={(e) => setpipeSize(e.target.value)}>
                                    <option value="DN6">DN6</option>
                                    <option value="DN10">DN10</option>
                                    <option value="DN15">DN15</option>
                                    <option value="DN20">DN20</option>
                                    <option value="DN25">DN25</option>
                                    <option value="DN32">DN32</option>
                                    <option value="DN40">DN40</option>
                                    <option value="DN50">DN50</option>
                                    <option value="DN65">DN65</option>
                                    <option value="DN80">DN80</option>
                                    <option value="DN100">DN100</option>
                                    <option value="DN125">DN125</option>
                                    <option value="DN150">DN150</option>
                                    <option value="DN200">DN200</option>
                                    <option value="DN250">DN250</option>
                                    <option value="DN300">DN300</option>
                                    <option value="DN350">DN350</option>
                                    <option value="DN400">DN400</option>
                                    <option value="DN450">DN450</option>
                                    <option value="6A">6A</option>
                                    <option value="10A">10A</option>
                                    <option value="15A">15A</option>
                                    <option value="20A">20A</option>
                                    <option value="25A">25A</option>
                                    <option value="32A">32A</option>
                                    <option value="40A">40A</option>
                                    <option value="50A">50A</option>
                                    <option value="65A">65A</option>
                                    <option value="80A">80A</option>
                                    <option value="100A">100A</option>
                                    <option value="125A">125A</option>
                                    <option value="150A">150A</option>
                                    <option value="200A">200A</option>
                                    <option value="250A">250A</option>
                                    <option value="300A">300A</option>
                                    <option value="350A">350A</option>
                                    <option value="400A">400A</option>
                                    <option value="450A">450A</option>
                                </select>
                            </label>
                        </form>
                        <form>
                            <label className="input">
                                Pipe Inner Diameter:  
                                <input value={pipeInnerDiameter} />
                                <input className="unit" value={pipeInnerDiameterUnit}/>
                            </label>
                        </form>
                        <form>
                            <label className="input">
                                Water Velocity:  
                                <input 
                                    type="number" 
                                    onChange={(e) => setwaterVelocity(e.target.value)}/>
                                <input className="unit" value={waterVelocityUnit}/>
                            </label>
                        </form>
                        <button className="button"
                            onClick={getWaterFlowRate}
                        >
                        SUBMIT
                        </button>
                                
                        <form>
                            <label>
                                Water Flow Rate: <input className="result" value={result}/>
                                <input className="unit" value={resultUnit}/>
                            </label>
                        </form>
               
            </body>
        </div>
    );
}

export default WaterFlowRate;