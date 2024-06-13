import Challenge from "../../components/Challenge";
import { Seperator } from "../../components/Seperator";
import DragAndDropList from "./challenges/DragAndDropList";
import Sorting from "./challenges/Sorting";

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
      <Seperator />
      <Challenge
        title="Sorting"
        description={[
          "Create a component that takes in an array of strings, numbers, and dates",
          "Sort each array in ascending order by default",
          "Add a buttons to sort in ascending and descending order",
        ]}
      >
        <Sorting
          strings={["Zebra", "Apple", "Banana", "Carrot"]}
          numbers={[5, 3, 1, 4, 2]}
          dates={[
            new Date("2021-01-01"),
            new Date("2021-01-02"),
            new Date("2021-01-03"),
          ]}
        />
      </Challenge>
    </>
  );
}
