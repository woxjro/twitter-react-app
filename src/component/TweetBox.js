import React, { useState } from "react";

export default function TweetBox({ client }) {
  return (
    <div className="tweet-box">
      <div className="container">
        <p className="client">{client}</p>
        <input className="tweet-input" />
      </div>
    </div>
  );
}
