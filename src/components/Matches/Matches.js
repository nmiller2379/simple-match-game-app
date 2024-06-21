import React from "react";

export default function Matches({ matches, totalMatches }) {
  return (
    <p>
      You have {matches}/{totalMatches} matches so far.
    </p>
  );
}
