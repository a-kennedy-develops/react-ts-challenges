import Challenge from "../../components/Challenge";
import { DragAndDropList } from "./challenges/DragAndDropList";

export function Intermediate() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Intermediate Challenges</h1>
      <Challenge
        title="Drag and Drop"
        description="Create a simple drag and drop list. Avoid styling or libraries for now."
      >
        <DragAndDropList />
      </Challenge>
    </>
  );
}
