// outputNode.js

import { Handle, Position } from "reactflow";

export default function OutputNode({ data }) {
  return (
    <div style={{ padding: 10, border: "1px solid #555", borderRadius: 8 }}>
      <div>Output</div>

      {/* 🔥 YAHAN VALUE SHOW KARO */}
      <div style={{ marginTop: 8 }}>
        {data?.value || ""}
      </div>

      {/* Left side target handle */}
      <Handle
        type="target"
        position={Position.Left}
        id="input"
      />
    </div>
  );
}