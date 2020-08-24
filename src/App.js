import React from "react";
import "./App.css";
import TweetBox from "./component/TweetBox";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <TweetBox client={"user1"} />
        <TweetBox client={"user2"} />
        <TweetBox client={"user3"} />
      </div>
    </div>
  );
}

export default App;
