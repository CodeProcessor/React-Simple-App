import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn Python' />
      <Todo text='Learn React' />
      <Todo text='Learn Machine Learning' />
    </div>
  );
}

export default App;
