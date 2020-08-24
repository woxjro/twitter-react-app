import React, { useState, useEffect } from "react";

export default function TweetBox({ client }) {
  const MAX_LIMIT_CHARACTERS = 140;

  const [charNum, setCharNum] = useState(0);
  const [tweet, setTweet] = useState("");
  return (
    <div className="tweet-box">
      <div className="container">
        <p className="client">{client}</p>
        <form onSubmit={() => console.log("submit!")}>
          <label>
            <input
              type="text"
              value={tweet}
              onChange={event => {
                setTweet(event.target.value);
                setCharNum(event.target.value.length);
                console.log(tweet);
                console.log(charNum);
              }}
            />
          </label>
          <input type="submit" value="Submit" />
          {charNum <= MAX_LIMIT_CHARACTERS ? (
            <p className="char-count">{charNum}文字</p>
          ) : (
            <p className="char-count warn">{charNum}文字</p>
          )}
        </form>
      </div>
    </div>
  );
}
