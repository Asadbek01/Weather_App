import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Main } from "./componenets/Main";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
 <BrowserRouter>
 <Router>

      <Main />
 </Router>
 </BrowserRouter>
      </div>
     
    
     );
}

export default App;
