// example of of a reducer locacted outside the file

const [task, setTask] = useReducer(taskReducer, initialTasks);

function handleAddTask(text) {
  dispatch({
    type: "added",
    id: nextId++,
    text: text,
  });
}

function handleChangeMsg(msg) {
  dispatch({
    type: "edited_message",
    message: msg,
  });
}

function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
  }
}
