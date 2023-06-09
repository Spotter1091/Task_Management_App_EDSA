import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TaskManager({todo, toggleComplete, deleteTask}) {
  return (
    <div className="task-app">
      <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? "completed" : ""}`}>{todo.todo}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(todo.id)} />
      </div>
    </div>  
  );
}


// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

// export default function TaskManager({todo, toggleComplete }) {
//   return (
//     <div className="task-app">
//       <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? 'completed': ""}`}>{todo.todo}</p>
//       <div>
//         <FontAwesomeIcon icon={faPenToSquare} />
//         <FontAwesomeIcon icon={faTrash} />
//       </div>
//     </div>  
//   );
// }
