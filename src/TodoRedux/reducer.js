import {
    ADD_TO_TODO, DELETE_TODO,COMPLETED_TASK, DELETE_COMPLETED_TASK, EDIT_ITEM, HANDLE_UPDATE, TOGGLE_COMPLETE} from './actionType';
import { loadData, saveData } from './localStorage'
import { v4 as uuidv4 } from 'uuid';
import { handleUpdate } from './action';

const initState= ({
    isLoading: false,
    todo:loadData("task") ||[],
    completedItem:[],
    isUpdate: false
})

const reducer = (state=initState, {type, payload})=>{
    console.log(payload)
    switch(type){
     
        case ADD_TO_TODO:
            let data = [...state.todo, payload]
            saveData("task", data)
            return ({
                ...state,
                todo: [...state.todo, payload],
                isUpdate: false
            })
            
        case DELETE_TODO:
            let delItem = state.todo
            let updatedItem = delItem.filter((item)=>item.id!=payload)
            saveData("task", updatedItem)
            return ({
                ...state,
                todo: updatedItem,
                isUpdate: false
            })

        case HANDLE_UPDATE:
            let updateItem = [...state.todo]
            let newUpdatedItem = updateItem.filter((item)=>item.id===payload.id?(
                    item.item = payload.newItem,
                    item.price = payload.newPrice,
                    item.id = payload.id
            ):true)
            saveData("task", newUpdatedItem)
            return ({
                ...state,
                todo: newUpdatedItem,
                isUpdate: true
            })

        case DELETE_COMPLETED_TASK:
            let compItem = state.completedItem
            let updatedNewItem = compItem.filter((item)=>item.id!=payload)
            // saveData("task", updatedItem)
            return ({
                ...state,
                completedItem: updatedNewItem,
                isUpdate: false
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
                todo: updatedTodo,
                isUpdate: false
            })

        case TOGGLE_COMPLETE:
            let finishItems = state.completedItem
            let toggleItems = finishItems.find((item)=>item.id===payload)
            let filteredItems = finishItems.filter((item)=>item.id!=payload)
            return ({
                ...state,
                todo: [...state.todo, toggleItems],
                completedItem: filteredItems,
                isUpdate: false
            })
            default:
                return state;
    }
}
export default reducer;