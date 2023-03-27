import { makeAutoObservable } from "mobx";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class Todo {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      });
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id: number) {
    const todo = this.todos.find(todo => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Todo();
