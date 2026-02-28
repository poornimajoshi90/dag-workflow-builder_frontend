import React from "react";
import BaseNode from "./BaseNode";

const DelayNode = ({ id, data }) => {
  return (
    <BaseNode
      title="Delay Node"
      inputs={["input"]}
      outputs={["output"]}
    >
      <div>
        <input type="number" placeholder="Delay (ms)" />
      </div>
    </BaseNode>
  );
};

export default DelayNode;