import React from "react";

export default function Message({ matches, totalMatches }) {
  return (
    <div>
      {matches === totalMatches ? <h3>You Win!</h3> : <h3>Game Over</h3>}
      <p>
        You found {matches} out of a poossible {totalMatches}. Good work!
      </p>
    </div>
  );
}
