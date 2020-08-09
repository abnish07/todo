import React from 'react'
import './TodoList.css'
import { connect } from 'react-redux';
import { deleteItem, completedTask, updatedItem } from '../TodoRedux/action';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            newItem: '',
            newPrice: '',
            isEditing: false
        }
    }

    handleEdit=()=>{
        this.setState({        
            isEditing: true
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { todoData, deleteItem, toggleChecked, updatedItem } = this.props;
        const { isEditing, newItem, newPrice } = this.state
        const { handleEdit, handleChange } = this
        console.log(newItem, newPrice, isEditing)
        return(
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Complete</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col" colSpan="2" className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {todoData && todoData.todo?.map(item=>(
                                <tr key={uuidv4()} >
                                    <td> 
                                    {isEditing?"":<input type="checkbox" 
                                    onChange={()=>toggleChecked(item.id)}/>}</td>

                                    {isEditing?<td>
                                    <input type= "text" value={newItem} className="editStyle" name="newItem" onChange={handleChange} /></td>:
                                    <td>{item.item}</td>}

                                    {isEditing?
                                    <td><input type= "text" value={newItem} className="editStyle" name="newPrice" onChange={handleChange} /> </td> :
                                    <td>{item.price}</td>}
                                    

                                   {isEditing? 
                                   <td>
                                       <button className="btn btn-danger">Cancel</button></td> : 
                                   <td>
                                       <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>
                                        Delete</button></td>}

                                    {isEditing? <td><button className="btn btn-primary" onClick={()=>updatedItem(item.id)}>
                                        Save</button></td>: <td><button className="btn btn-success" onClick={handleEdit}>
                                        Edit</button></td>}
                                </tr>))}
                    </tbody>
                </table>
               
            </div>
            )
    }
}

const mapStateToProps=(state)=>({
    todoData: state.todoReducer
})

const mapDispatchToProps=(dispatch)=>({
    deleteItem: (query)=>dispatch(deleteItem(query)),
    toggleChecked: (id)=>dispatch(completedTask(id)),
    updatedItem: (query)=>dispatch(updatedItem(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
