export default function courseReducer(state = [], action){
  switch(action.type) {
    case 'CREATE_COURSE':
      debugger;
    // spread operator to assign array of our courses (If we have any)
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
};
