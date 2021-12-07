import React from "react";

export default function ColorList({ hex }) {
  return <div style={{ color: hex }}>{hex}</div>;
}
