// import logo from './logo.svg';
import React from "react";
import './App.css';
import Main from "./Components/Main"
 import './Components/Style.css'
//  import { BoxIcon } from "boxicons";






function App() {
//   const [data, setData] = useState(() => {
//     // Get data from local storage on initial render
//     const savedData = localStorage.getItem("myData");
//     return savedData ? JSON.parse(savedData) : [];
// });

// useEffect(() => {
//     // Save data to local storage whenever it changes
//     localStorage.setItem("myData", JSON.stringify(data));
// }, [data]);

  return (
    <div className="App">
  <Main/>
 
    </div>
  );
}

export default App;
