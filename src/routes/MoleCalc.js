import React, {useState} from "react";
import './MoleCalc.css'


function MoleCalc(){
    let [mass, setmass] = useState('');
    let [moleWeight, setmoleWeight] = useState('');
    let [result, setResult] = useState('');
    let [massUnit, setmassUnit] = useState('');
    let [moleWeightUnit, setmoleWeightUnit] = useState("g/mol");
    let [resultUnit, setresultUnit] = useState("moles");

    function getMoles(){
        let temp1 = mass;
        let temp2 = moleWeight;
        let tempResult = 0;

        if(temp1===0){
            setResult("0")
        }else{
           if(massUnit==="g"){
                tempResult = temp1/temp2
                setResult(tempResult.toFixed(5))
                console.log(tempResult)
           }else{
               if(massUnit==="kg"){
                   tempResult = (temp1*10000)/temp2
                   setResult(tempResult.toFixed(5))
                   console.log(tempResult)
               }else{
                   if(massUnit==="lbs"){
                       tempResult = (temp1*453.592)/temp2
                       setResult(tempResult.toFixed(5))
                       console.log(tempResult)
                   }else{
                       tempResult=(temp1*28.35)/temp2
                       setResult(tempResult.toFixed(5))
                       console.log(tempResult)
                    }
               }
           }
        }
        if(temp1==null){
            setResult("Incorrect inputs!")
        }
        setmass('');
        setmassUnit('');
        setmoleWeight('');

    }

    return (
        <div className="bg">
            <header className="title">
                <h1 >Moles Calculator</h1>
            </header>

            <body  className="body">
                        <form>
                            <label className="input">
                                Mass :
                                <input 
                                    type="number" 
                                    onChange={(e) => setmass(e.target.value)}/>
                                <select onChange={(e) => setmassUnit(e.target.value)}>
                                    <option value="g">g</option>
                                    <option value="kg">kg</option>
                                    <option value="lbs">lbs</option>
                                    <option value="ounce">oz</option>
                                </select>
                            </label>
                        </form>
                    
                        <form>
                            <label className="input">
                                Molecular Weight:    
                                <input 
                                    type="number" 
                                    onChange={(e) => setmoleWeight(e.target.value)}/>
                                <input className="unit"value={moleWeightUnit}/>
                            </label>
                        </form>
                        <button className="button"
                            onClick={getMoles}
                        >
                        SUBMIT
                        </button>
                                
                        <form>
                            <label>
                                Moles: <input className="result" value={result}/>
                                <input className="unit"value={resultUnit}/>
                            </label>
                        </form>
               
            </body>
        </div>
    );
}
export default MoleCalc;
