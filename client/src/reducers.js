const initialState = {
    isAuthenticated: false,
    projects: [],
    tasks: []
}

const appReducer = (state = initialState,action) => {
   switch(action.type){
        case 'verify_user':
        return {...state , isAuthenticated: action.response}
        case 'get_projects':
        return Object.assign({}, state, {
            projects:[
                ...action.response
            ]
        })
        case 'get_tasks':
        return Object.assign({}, state, {
            tasks:[
                ...action.response
            ]
        })
        case 'add_project':
        return Object.assign({}, state, {
            projects:[
                ...state.projects,
                {
                   ...action.response
                }
            ]
        })
        case 'add_task':
        return Object.assign({}, state, {
            tasks:[
                ...state.tasks,
                {
                    ...action.response
                }
            ]
        })        
        case 'update_status':
        return Object.assign({}, state, {
            tasks: state.tasks.map((item) => {
              if (item._id == action.response._id) {
                return {
                    ...item,
                    ...action.response
                }
              }
              return item
            })
        })
        case 'set_time':
        return Object.assign({}, state, {
            tasks: state.tasks.map((item) => {
              if (item._id == action.response._id) {
                return {
                    ...item,
                    ...action.response
                }
              }
              return item
            })
        })        
        default:
        return state;
    }    

}

export default appReducer;
