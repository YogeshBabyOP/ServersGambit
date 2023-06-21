import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState("Response from server...");

  const handleClickforCPP = async () => {
    let startTimeForCPP = new Date().getTime();
    let endTimeForCPP = 0;
    await axios.get("http://localhost:8080/time").then((res) => {
      // console.log(res)
      setResponse(res.data);
      endTimeForCPP = new Date().getTime();
    });
    startTimeForCPP = Number(startTimeForCPP);
    endTimeForCPP = Number(endTimeForCPP);
    console.log(endTimeForCPP - startTimeForCPP);
  };

  const handleClickforGOLANG = async () => {
    let startTime = new Date().getTime();
    let endTime = 0;
    await axios.get("http://localhost:8082/time").then((res) => {
      // console.log(res)
      setResponse(res.data);
      endTime = new Date().getTime();
    });
    startTime = Number(startTime);
    endTime = Number(endTime);
    console.log(endTime - startTime);
  };
  const handleClickforPYTHON = () => {
    let startTimeForPython = new Date().getTime();
    let endTimeForPython = 0;
    axios.get("http://localhost:8084/time").then((res) => {
      setResponse(res.data);
      endTimeForPython = new Date().getTime();
    });
    startTimeForPython = Number(startTimeForPython);
    endTimeForPython = Number(endTimeForPython);
    console.log(endTimeForPython - startTimeForPython);
  };

  const handleClickforPHP = async () => {
    let startTime = new Date().getTime();
    let endTime = 0;
    await axios.get("http://localhost:8086/time").then((res) => {
      // console.log(res)
      setResponse(res.data);
      endTime = new Date().getTime();
    });
    startTime = Number(startTime);
    endTime = Number(endTime);
    console.log(endTime - startTime);
  };

  const handleClickforJAVA = async () => {
    let startTime = new Date().getTime();
    let endTime = 0;
    await axios.get("http://localhost:8088/time").then((res) => {
      // console.log(res)
      setResponse(res.data);
      endTime = new Date().getTime();
    });
    startTime = Number(startTime);
    endTime = Number(endTime);
    console.log(endTime - startTime);
  };
  return (
    <div className="App">
      <h1>The Server's Gambit</h1>

      <div className="button">
        <button onClick={handleClickforCPP}>
          Click to get response from C++ server
        </button>
      </div>
      <br />
      
      <div className="button">
        <button onClick={handleClickforGOLANG}>
          Click to get response from GOLANG server
        </button>
      </div>
      <br />
      <div className="button">
        <button onClick={handleClickforPYTHON}>
          Click to get response from PYTHON server
        </button>
      </div>
      <br />
      <div className="button">
        <button onClick={handleClickforPHP}>
          Click to get response from PHP server
        </button>
      </div>
      <br />
      <div className="button">
        <button onClick={handleClickforJAVA}>
          Click to get response from JAVA server
        </button>
      </div>
      <br />
      <br />
      <div className="response">
        <h2>{response}</h2>
      </div>
    </div>
  );
}

export default App;
