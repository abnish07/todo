import React from 'react'
import './TodoList.css'
import { connect } from 'react-redux';
import { deleteItem, completedTask } from '../TodoRedux/action';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { todoData, deleteItem, toggleChecked } = this.props;
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
                                    <input type="checkbox" 
                                    onChange={()=>toggleChecked(item.id)}/></td>
                                 
                                    <td>{item.item}</td> 
                                    <td>{item.price}</td> 
                                   
                                   <td>
                                       <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>
                                        Delete</button></td>
                                     <td>
                                        <Link to={`/${item.id}`}> <button className="btn btn-success" onClick={handleEdit}>
                                        Edit</button></Link>
                                        </td>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
