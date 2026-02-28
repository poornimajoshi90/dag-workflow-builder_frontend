import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({ id, title, inputs = [], outputs = [], children }) => {
  return (
    <div
      style={{
        width: 220,
        padding: 10,
        borderRadius: 10,
        background: "#f9f9f9",
        border: "1px solid #ddd",
        position: "relative"
      }}
    >
      {/* Title */}
      <div style={{ fontWeight: "bold", marginBottom: 8 }}>
        {title}
      </div>

      {/* LEFT SIDE INPUT HANDLES */}
      {inputs.map((input, index) => {
        const topPosition =
          inputs.length === 1
            ? "50%"
            : `${50 + index * 25}px`;

        return (
          <div
            key={input}
            style={{
              position: "absolute",
              top: topPosition,
              left: -60,
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 5
            }}
          >
            <Handle
              type="target"
              position={Position.Left}
              id={input}   // ✅ IMPORTANT FIX
              style={{
                position: "relative",
                background: "#555"
              }}
            />
            <span style={{ fontSize: 12 }}>{input}</span>
          </div>
        );
      })}

      {/* RIGHT SIDE OUTPUT HANDLES */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}   // ✅ IMPORTANT FIX
          style={{
            top: 50 + index * 25,
            background: "green"
          }}
        />
      ))}

      {/* Custom Content */}
      <div style={{ marginTop: 10 }}>
        {children}
      </div>
    </div>
  );
};

export default BaseNode;