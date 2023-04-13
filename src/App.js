import Todo from "./components/Todo";
import Model from './components/Model'
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn Python' />
      <Todo text='Learn React' />
      <Todo text='Learn Machine Learning' />
      <Model />
      <Backdrop />
    </div>
  );
}

export default App;
