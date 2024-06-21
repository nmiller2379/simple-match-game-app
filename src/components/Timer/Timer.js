import React from "react";

export default function Timer({ minutes, seconds }) {
  return (
    <p>
      Time remaining: {minutes}:{seconds}
    </p>
  );
}
