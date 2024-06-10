import Challenge from "../../components/Challenge";
import { Seperator } from "../../components/Seperator";
import GetCatFacts from "./challenges/GetCatFacts";
import TodoList from "./challenges/TodoList";

export function Basic () {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Basic Challenges</h1>
      <Challenge
        title="TODO List"
        description="Basic todo list utilizing the useState hook. TODO items can
          be added, edited, and removed."
      >
        <TodoList />
      </Challenge>
      <Seperator />
      <Challenge
        title="API Get Request"
        description="Fetch cat facts from an API (without axios)."
      >
        <GetCatFacts />
      </Challenge>
    </>
  );
}
