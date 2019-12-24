const getPageValuesReducer = (state = {}, action) => {
     switch (action.type) {
          case 'GET_VALS':
               return { ...state, index: 0 };
          case 'NEW_INDEX':
               return { ...state, index: action.index }
          //-------------------------------------------------------------
          default: 
               return state;
     }
};

export default getPageValuesReducer;