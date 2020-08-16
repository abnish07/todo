import {
    ADD_TO_TODO, DELETE_TODO, TOGGLE_COMPLETE, DELETE_COMPLETED_TASK, EDIT_ITEM, HANDLE_UPDATE, COMPLETED_TASK} from './actionType';

    export const addToTodo=(payload)=>({
        type: ADD_TO_TODO,
        payload
    }) 
    export const deleteItem=(payload)=>({
        type: DELETE_TODO,
        payload
    }) 
    export const toggleComplete=(payload)=>({
        type: TOGGLE_COMPLETE,
        payload
    }) 
    export const completedTask=(payload)=>({
        type: COMPLETED_TASK,
        payload
    }) 
    export const deleteCompletedTask=(payload)=>({
        type: DELETE_COMPLETED_TASK,
        payload
    }) 
   
    export const handleUpdate=(payload)=>({
        type: HANDLE_UPDATE,
        payload
    }) 

