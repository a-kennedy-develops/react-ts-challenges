import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("Test");
  const [editingIndex, setEditingIndex] = useState<number>();
  const [editingInput, setEditingInput] = useState<string>("");

  const handleAddTodo = () => {
    if (!input) return;
    setTodos([...todos, input]);
    setInput("");
    setEditingIndex(undefined);
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setEditingIndex(undefined);
  };

  const handleAddEditedTodo = () => {
    const newTodos = [...todos];
    newTodos[editingIndex as number] = editingInput;
    setTodos(newTodos);
    setEditingInput("");
    setEditingIndex(undefined);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-black rounded p-1"
      />
      <button onClick={handleAddTodo} className="ml-2 hover:text-green-700">
        Add Todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <div key={index} className="flex flex-row justify-between mt-4">
            <li key={index}>
              {editingIndex !== undefined && editingIndex === index ? (
                <input
                  value={editingInput}
                  onChange={(e) => setEditingInput(e.target.value)}
                  className="max-w-36 border border-black rounded p-1"
                />
              ) : (
                <span>{todo}</span>
              )}
            </li>
            {editingIndex !== index && (
              <div className="flex">
                <button
                  onClick={() => {
                    setEditingInput(todo);
                    setEditingIndex(index);
                  }}
                  className="hover:cursor-pointer hover:text-green-700 border border-black p-1 rounded mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveTodo(index)}
                  className="hover:cursor-pointer hover:text-red-600 border border-black p-1 rounded"
                >
                  Remove
                </button>
              </div>
            )}
            {editingIndex === index && (
              <div className="flex">
                <button
                  onClick={() => handleAddEditedTodo()}
                  className="hover:cursor-pointer hover:text-green-700 border border-black p-1 rounded mr-4"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setEditingIndex(undefined);
                    setEditingInput("");
                  }}
                  className="hover:cursor-pointer hover:text-red-600 border border-black p-1 rounded"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
