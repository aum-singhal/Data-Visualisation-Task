import { useState } from 'react';
import './App.css';
import { ShowFlavanoidTable } from './pages/ShowFlavanoidTable';
import { ShowGammaTable } from './pages/ShowGammaTable';
import { calculateFlavanoids, flavanoids, gamma } from './services/data-processing-methods';
import wineData from "./wine-data.json";

function App() {
  calculateFlavanoids(wineData);
  const [selectTable, setSelectTable] = useState("flavanoids");
  return (
    <div className="App flex-a-cen-j-cen flex-d-col">

      <div className="select-table flex-a-cen">
        <div onClick={()=>setSelectTable("flavanoids")} className={selectTable==="flavanoids"?"selected":""}>Flavanoid Table</div>
        <div onClick={()=>setSelectTable("gamma")} className={selectTable==="gamma"?"selected":""}>Gamma Table</div>
        <div className="underline"></div>
      </div>

      <div className="show-table">
        {selectTable==="flavanoids"? <ShowFlavanoidTable flavanoids={flavanoids} /> : <ShowGammaTable gamma={gamma} />}
      </div>
    </div>
  );
}

export default App;
