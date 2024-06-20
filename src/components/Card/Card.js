import React from "react";

export default function Card({ src, alt }) {
  return (
    <button>
      <img src={src} alt={alt} />
    </button>
  );
}
