import React from "react";
import "./App.css";
import TweetBox from "./component/TweetBox";
import { CLIENTS } from "./env";
function App() {
  return (
    <div className="App">
      <div className="App-container">
        {CLIENTS.map((CLIENT, i) => {
          return <TweetBox client={CLIENT} id={i} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
