export const initialState = [
  {id: 1, text: "the first todo", done: false},
  {id: 2, text: "the second todo", done: false},
];

// reducer is a pure function that define and gather all state update logic
export const todoReducer = (state, action) => {
  switch (action.type){
      case 'DONE':
          return state.map(todo =>{
              if(action.id === todo.id){
                  return {...todo,done:!todo.done}
              }
              return todo
          })
      case 'REMOVE':
          return state.filter(todo => action.id !== todo.id)
      case 'ADD':
            const newId = state.length ? Math.max(...state.map(t => t.id)) + 1 : 1;
            const newTodo = {id: newId, text: action.text, done: false};
            return [...state, newTodo]
      default: return state
  }
};
