import React, {useState} from "react";
import './MichaelisMentenEq.css';

function MichaelisMenten(){
    let [michaelisConst, setmichaelisConst] = useState('');
    let [maxReaxSpeed, setmaxReaxSpeed] = useState('');
    let [substrateConc, setsubstrateConc] = useState('');
    let [michaelisConstUnit, setmichaelisConstUnit] = useState('molars');
    let [maxReaxSpeedUnit, setmaxReaxSpeedUnit] = useState('1/s');
    let [substrateConcUnit, setsubstrateConcUnit] = useState('molars');
    let [reactionRateUnit, setreactionRateUnit] = useState('1/s');
    let [result, setResult] = useState('');


    function getReactionRate(){
        let temp1 = Number(michaelisConst);
        let temp2 = Number(maxReaxSpeed);
        let temp3 = Number(substrateConc);
        let tempResult = 0;

        tempResult=(temp2*temp3)/(temp3+temp1)
        console.log("ans "+tempResult)
        if(tempResult==null){
            setResult("Incorrect input!")
        }else{
            setResult(tempResult.toFixed(5))
        }

        setmichaelisConst('');
        setmaxReaxSpeed('');
        setsubstrateConc('');
    }

    return (
        <div className="bg">
            <header className="title">
                <h1 >Michaelis Menten Equation</h1>
            </header>

            <body className="body">
                <form>
                    <label className="input1">
                        Michaelis Constant:
                        <input 
                            type="number" 
                            onChange={(e) => setmichaelisConst(e.target.value)}/>
                        <input className="unit" value={michaelisConstUnit}/>
                   </label>
                </form>
                    
                <form>
                    <label className="input2">
                        Max Reaction Speed:     
                        <input 
                            type="number" 
                            onChange={(e) => setmaxReaxSpeed(e.target.value)}/>
                        <input className="unit"value={maxReaxSpeedUnit}/>
                    </label>
                </form>

                <form>
                    <label className="input3">
                        Substrate Concentration:   
                        <input 
                           type="number" 
                            onChange={(e) => setsubstrateConc(e.target.value)}/>
                        <input className="unit" value={substrateConcUnit}/>
                    </label>
                </form>
                <button className="button"
                    onClick={getReactionRate}
                    >SUBMIT
                </button>
                                
                <form>
                    <label>
                        ReactionRate: <input className="result" value={result}/>
                        <input className="unit" value={reactionRateUnit} />
                        </label>
                        </form>
               
            </body>
        </div>
    );
}

export default MichaelisMenten;
