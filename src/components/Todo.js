import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modelIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler() {
    setModelIsOpen(true);
  }

  function closeModelHandler() {
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {modelIsOpen && <Backdrop onClick={closeModelHandler} />}

        {modelIsOpen ? <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler} /> : null}
      </div>
    </div>
  );
}

export default Todo;
