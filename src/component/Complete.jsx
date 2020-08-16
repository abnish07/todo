import React from 'react';
import { toggleComplete, deleteCompletedTask } from '../TodoRedux/action';
import { connect } from 'react-redux';

class Complete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {completedTask, toggleComplete, deleteCompletedTask} = this.props; 
        console.log(deleteCompletedTask)
        console.log(completedTask)
        return ( 
            <div>
                    <h6 className="text-center" style={{color:"#ffff00"}} >Total completed Task is {completedTask.length}</h6>
                   {(completedTask.length>0)?
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
                            {completedTask?.map(item=>(
                                <tr key={item.id}>
                                    <td><input type="checkbox" checked      
                                    onChange={()=>toggleComplete(item.id)} /></td>
                                    <td style={{textDecorationLine: 'line-through', color: "greenYellow"}}>{item.item} </td>
                                    <td>{item.price} </td>
                                    <td><button className="btn btn-danger" onClick={()=>deleteCompletedTask(item.id)}>
                                        Delete</button></td>
                                   
                                </tr>))}
                    </tbody>
                </table>:""}
            </div>
         );
    }
}



const mapStateToProps=(state)=>({
    completedTask: state.todoReducer.completedItem
})

const mapDispatchToProps=(dispatch)=>({
    deleteCompletedTask: (itemId)=>dispatch(deleteCompletedTask(itemId)),
    toggleComplete: (id)=>dispatch(toggleComplete(id))
})


// const lineThrough={
//     textDecoration: lineThrough
    
// }

export default connect(mapStateToProps, mapDispatchToProps)(Complete)