const demoReducer = (state = {}, action) => {
     switch (action.type) {
          case 'GET_NEWS':
               return { ...state, loading: true };
          case 'NEWS_RECEIVED':
               return { ...state, news: action.json, loading: false }
          //-------------------------------------------------------------
          case 'CHANGE_MODE':
               return { ...state, newMode: false }
          case 'NEW_MODE':
               return { ...state, newMode: action.newMode.status }
          //-------------------------------------------------------------
          default: 
               return state;
     }
};

export default demoReducer;