import React from "react";
import "./App.css";
import TweetBox from "./component/TweetBox";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <TweetBox client_name={"user1"} />
        <TweetBox client_name={"user2"} />
        <TweetBox client_name={"user3"} />
      </div>
    </div>
  );
}

export default App;
