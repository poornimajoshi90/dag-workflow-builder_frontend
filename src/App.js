import { ReactFlowProvider } from "reactflow";
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <ReactFlowProvider>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </ReactFlowProvider>
  );
}

export default App;
