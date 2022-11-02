import ReactDOM from "react-dom";
import React from "react";
import MyApp from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';





function App(){
  return(
    <MyApp/>
  )
}
 
export default App;




ReactDOM.render(<App/>,document.getElementById('root')); 
