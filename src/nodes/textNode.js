// textNode.js

import React, { useState, useEffect } from "react";
import BaseNode from "./BaseNode";

const TextNode = ({ id }) => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

    const matches = [...text.matchAll(regex)].map((m) => m[1]);

    const uniqueVars = [...new Set(matches)];

    setVariables(uniqueVars);
  }, [text]);

  return (
    <BaseNode
      id={id}
      title="Text"
      // 🔥 IMPORTANT FIX
      inputs={variables.length ? variables : ["input"]}
      outputs={["output"]}
    >
      <textarea
        style={{
          width: "100%",
          resize: "none",
          overflow: "hidden"
        }}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        placeholder="Type something like hello {{input}}"
      />
    </BaseNode>
  );
};

export default TextNode;