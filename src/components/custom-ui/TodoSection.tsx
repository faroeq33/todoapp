function TodoSection() {
  const todos = [
    {
      id: 1,
      text: "Complete online JavaScript course",
      completed: true,
    },
    {
      id: 2,
      text: "Jog around the park 3x",
      completed: false,
    },
    {
      id: 3,
      text: "10 minutes meditation",
      completed: false,
    },
    {
      id: 4,
      text: "Read for 1 hour",
      completed: false,
    },
    {
      id: 5,
      text: "Pick up groceries",
      completed: false,
    },
    {
      id: 6,
      text: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ];
  return (
    <section className="w-full todo-section">
      <form action="" className="flex flex-col gap-6">
        <input
          type="text"
          className="w-full p-2 rounded-md"
          placeholder="Add a new todo"
        />
        <ul className="bg-white">
          {/* temporary bgs, they will be removed because I will controll them in the parent */}
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        <div className="div">
          <div className="flex justify-between">
            <div className="bg-white elem">6 items left</div>
            <div className="bg-white elem">clear completed</div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
      </form>
    </section>
  );
}

export default TodoSection;
