export const addToList=(val)=>{
    return {type:'ADDTOLIST',element:val}
}
export const addToCompleteList=(val)=>{
    return {type:'ADDTOCOMPLETELIST',obj:val}
}
export const All=()=>{
    return {type:'ALL'}
}
export const Completed=()=>{
    return {type:'COMPLETED'}
}
export const inComplete=()=>{
    return {type:'INCOMPLETED'}
}