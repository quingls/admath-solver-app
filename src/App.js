import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './routes/HomePage';
import CarnotEfficiency from './routes/CarnotEfficiencyCalc';
import WaterFlowRate from './routes/WaterFlowRateCalc';
import MichaelisMenten from './routes/MichaelisMentenEq';
import MoleCalc from './routes/MoleCalc';
import CompressibilityFactor from './routes/CompressibilityFactorCalc';
import MachNum from './routes/MachNumCalc'; 


function App() {
  return (
    <div className="App">
    
      {/* ROUTES */}
        <BrowserRouter>
          <Navbar />  
          <Switch>
            <Route path='/' exact component={Homepage}/>
            <Route path='/carnot-efficiency' exact component={CarnotEfficiency}/>
            <Route path='/compressibility-factor' exact component={CompressibilityFactor}/>
            <Route path='/mach-number' exact component={MachNum}/>
            <Route path='/michaelis-menten-equation' exact component={MichaelisMenten}/>
            <Route path='/mole' exact component={MoleCalc}/>
            <Route path='/water-flow-rate' exact component={WaterFlowRate}/>
          </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
