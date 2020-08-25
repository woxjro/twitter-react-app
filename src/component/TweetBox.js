import React, { useState, useEffect } from "react";
import { TWITTER_USER_ID } from "../env";
import axios from "axios";
import FormData from "form-data";
export default function TweetBox({ client_name }) {
  const MAX_LIMIT_CHARACTERS = 140;

  const [charNum, setCharNum] = useState(0);
  const [tweet, setTweet] = useState("");

  return (
    <div className="tweet-box">
      <div className="container">
        <p className="client">{client_name}</p>
        <div>
          <textarea
            value={tweet}
            onChange={(event) => {
              setTweet(event.target.value);
              setCharNum(event.target.value.length);
              console.log(tweet);
              console.log(charNum);
            }}
          ></textarea>
          <div className="tweet-detail">
            {charNum <= MAX_LIMIT_CHARACTERS ? (
              <p className="char-count">{charNum}文字</p>
            ) : (
              <p className="char-count warn">{charNum}文字</p>
            )}
            <button
              onClick={async () => {
                await axios.post("http://localhost:8000/api/post", {
                  date: new Date(),
                  tweet: tweet,
                });
                setTweet("");
                setCharNum(0);
                console.log("done");
              }}
            >
              tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
