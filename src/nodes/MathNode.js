import React from "react";
import BaseNode from "./BaseNode";

const MathNode = ({ id, data }) => {
  return (
    <BaseNode
      title="Math Node"
      inputs={["a", "b"]}
      outputs={["result"]}
    >
      <div>
        <label>Operation:</label>
        <select>
          <option>Add</option>
          <option>Subtract</option>
          <option>Multiply</option>
          <option>Divide</option>
        </select>
      </div>
    </BaseNode>
  );
};

export default MathNode;