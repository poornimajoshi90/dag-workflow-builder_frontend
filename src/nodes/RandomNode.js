import React from "react";
import BaseNode from "./BaseNode";

const RandomNode = ({ id, data }) => {
  return (
    <BaseNode
      title="Random Generator"
      inputs={[]}
      outputs={["random"]}
    >
      <div>
        Generates random number
      </div>
    </BaseNode>
  );
};

export default RandomNode;