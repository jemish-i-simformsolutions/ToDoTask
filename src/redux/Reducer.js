export const initialState={
    list:[],
    count:0,
    indicator:0
};

export const Reducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case 'ADDTOLIST':
            return {
                ...state,
                list:[...state.list,{data:actions.element,id:state.count,status:'👋',opacity:1}],
                count:state.count+1
            };
        case 'ADDTOCOMPLETELIST':
                
                state.list[actions.obj.id].status='👍'; 
                state.list[actions.obj.id].opacity=0.3; 
                return{
                ...state,
                list:[...state.list]
                };
        case 'ALL':
            return {
                ...state,
                indicator:0
            };
        case 'COMPLETED':
            return {
                ...state,
                indicator:1
            };    
        case 'INCOMPLETED':
            return {
             ...state,
             indicator:2
            };    
        default:return state;
    }
}