import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <ReactFlow>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
