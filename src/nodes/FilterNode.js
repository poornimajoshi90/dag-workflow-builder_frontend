import React from "react";
import BaseNode from "./BaseNode";

const FilterNode = ({ id, data }) => {
  return (
    <BaseNode
      title="Filter Node"
      inputs={["input"]}
      outputs={["filtered"]}
    >
      <div>
        <input type="text" placeholder="Filter condition" />
      </div>
    </BaseNode>
  );
};

export default FilterNode;