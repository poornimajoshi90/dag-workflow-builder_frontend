// submit.js

import { useState } from "react";
import { useReactFlow } from "reactflow";

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
  const nodes = getNodes();
  const edges = getEdges();

  try {
    const response = await fetch(
      "https://dag-workflow-builder-backend-2.onrender.com/pipelines/parse",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      }
    );

    const data = await response.json();

    setResult(data);
    setShowModal(true);

  } catch (error) {
    console.error(error);
    setResult(null);
    setShowModal(true);
  }
};

  return (
    <>
      <button onClick={handleSubmit} style={buttonStyle}>
        Submit
      </button>

      {showModal && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>Pipeline Analysis</h2>

            {result ? (
              <>
                <p><strong>Number of Nodes:</strong> {result.nodeCount}</p>
                <p><strong>Number of Edges:</strong> {result.edgeCount}</p>
                <p>
                  <strong>Is DAG:</strong>{" "}
                  {result.isDAG ? "Yes ✅" : "No ❌"}
                </p>
              </>
            ) : (
              <p>❌ Error connecting to backend.</p>
            )}

            <button onClick={() => setShowModal(false)} style={closeButtonStyle}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
};

const closeButtonStyle = {
  marginTop: "15px",
  padding: "8px 16px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#333",
  color: "white",
  cursor: "pointer",
};