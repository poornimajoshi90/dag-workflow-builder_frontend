// inputNode.js

import React, { useState } from "react";
import BaseNode from "./BaseNode";

const InputNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || "");

  return (
    <BaseNode
      id={id}
      title="Input"
      inputs={[]}                
      outputs={["output"]}       
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value..."
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};

export default InputNode;