import { observer } from "mobx-react-lite";
import todo from "../../store/todo";
import "./todo.css";

const Counter: React.FC = observer(() => {
  return (
    <div className="todo">
      <button onClick={() => todo.fetchTodos()}>Fetch todos</button>
      {todo.todos.map((todoItem) => (
        <div key={todoItem.id} className="todo__item">
          <input
            className="todo__checkbox"
            type="checkbox"
            checked={todoItem.completed}
            onChange={() => todo.completeTodo(todoItem.id)}
          />
          <span className="todo__title">{todoItem.title}</span>
          <button
            className="todo__delete"
            onClick={() => todo.removeTodo(todoItem.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
});

export default Counter;
