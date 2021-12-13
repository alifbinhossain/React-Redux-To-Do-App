const initialList = {
  taskList: [],
};

function listReducer(state = initialList, action) {
  switch (action.type) {
    case "ADD_TO_LIST": {
      const newState = {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
      return newState;
    }
    case "REMOVE_FROM_LIST": {
      const newState = {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };
      return newState;
    }
    case "ADD_TO_TOP": {
      const sortedObject = action.payload;
      sortedObject.favorite = "yes";
      const remainingItem = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
      const newState = {
        ...state,
        taskList: [sortedObject, ...remainingItem],
      };
      return newState;
    }

    default:
      return state;
  }
}

export default listReducer;
