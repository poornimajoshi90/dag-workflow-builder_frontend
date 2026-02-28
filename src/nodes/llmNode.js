// llmNode.js

import React from "react";
import BaseNode from "./BaseNode";

const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM Node"
      inputs={["prompt"]}
      outputs={["response"]}
    >
      <div>
        <label>Model:</label>
        <select>
          <option value="gpt-3.5">GPT-3.5</option>
          <option value="gpt-4">GPT-4</option>
        </select>
      </div>
    </BaseNode>
  );
};

export default LLMNode;