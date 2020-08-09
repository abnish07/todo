import {
    ADD_TO_TODO, DELETE_TODO,COMPLETED_TASK, DELETE_COMPLETED_TASK, EDIT_ITEM, UPDATE_ITEM, TOGGLE_COMPLETE} from './actionType';
import { loadData, saveData } from './localStorage'
import { v4 as uuidv4 } from 'uuid';

const initState= ({
    isLoading: false,
    todo:loadData("task") ||[],
    completedItem:[],
    isEditing: false
})

const reducer = (state=initState, {type, payload})=>{
    console.log(payload)
    switch(type){
     
        case ADD_TO_TODO:
            let data = [...state.todo, payload]
            saveData("task", data)
            return ({
                ...state,
                todo: [...state.todo, payload]
            })
            
        case DELETE_TODO:
            let delItem = state.todo
            let updatedItem = delItem.filter((item)=>item.id!=payload)
            saveData("task", updatedItem)
            return ({
                ...state,
                todo: updatedItem
            })

        // case EDIT_ITEM:
        //     let editItem = state.todo
        //     let updatedItem = delItem.filter((item)=>item.id!=payload)
        //     saveData("task", updatedItem)
        //     return ({
        //         ...state,
        //         todo: updatedItem
        //     })

        // case UPDATE_ITEM:
        //     let updateItem = state.todo
        //     let newUpdatedItem = updateItem.find((item)=>item.id===payload)
        //     saveData("task", newUpdatedItem)
        //     return ({
        //         ...state,
        //         todo: newUpdatedItem
        //     })

        case DELETE_COMPLETED_TASK:
            let compItem = state.completedItem
            let updatedNewItem = compItem.filter((item)=>item.id!=payload)
            // saveData("task", updatedItem)
            return ({
                ...state,
                completedItem: updatedNewItem
            })

        case COMPLETED_TASK:
            let itemList = state.todo
            let completeItems = itemList.find((item)=>item.id===payload)
            let updatedTodo= itemList.filter((item)=>item.id!=payload)
            saveData("completed", state.completedItem)
            saveData("task", updatedTodo)
            return ({
                ...state,
                completedItem:[...state.completedItem, completeItems],
                todo: updatedTodo
            })

        case TOGGLE_COMPLETE:
            let finishItems = state.completedItem
            let toggleItems = finishItems.find((item)=>item.id===payload)
            let filteredItems = finishItems.filter((item)=>item.id!=payload)
            return ({
                ...state,
                todo: [...state.todo, toggleItems],
                completedItem: filteredItems
            })
            default:
                return state;
    }
}
export default reducer;