import { useState } from "react";
import FilterName from "./components/FilterName";
import Filtrado from "./components/Filtrado";
import "./index.css";



const App = () => {
  const [text,setText]=useState("")

  return (
      <div className="Contenedor">
        <FilterName text={text} setText={setText}/>
        <Filtrado text={text}/>
        
      </div>
  );
};

export default App;
