import React from "react";
import BaseNode from "./BaseNode";

const APINode = ({ id, data }) => {
  return (
    <BaseNode
      title="API Node"
      inputs={["request"]}
      outputs={["response"]}
    >
      <div>
        <label>Endpoint:</label>
        <input type="text" placeholder="http://127.0.0.1:8000/pipelines/parse" />
      </div>
    </BaseNode>
  );
};

export default APINode;