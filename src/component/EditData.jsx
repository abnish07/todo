import React from 'react'
import style from './Home.module.css'
import { connect } from 'react-redux';
import { deleteItem, completedTask, handleUpdate } from '../TodoRedux/action';
import { v4 as uuidv4 } from 'uuid';
import { Link, Redirect } from 'react-router-dom';

class EditData extends React.Component{
    constructor(props){
        super(props)
        this.state={
            newItem: '',
            newPrice: '',
            id: '',
            isEditing: false
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
        let {id} = this.props.match.params;
        const { todoData } = this.props;
        let item1 = todoData && todoData.find(item=>item.id===id)
        this.setState({
            newItem: item1 && item1.item, 
            newPrice: item1 && item1.price,
            id: item1 && item1.id
        })
    }

    handleCancel=()=>{
        this.props.history.push('/')
    }


    render(){
        const { handleUpdate, isUpdate } = this.props;
        const { isEditing, newItem, newPrice } = this.state
        const { handleCancel, handleChange } = this
        console.log(newItem, newPrice, isEditing)
        if(isUpdate){
            return <Redirect to="/"/>
        }
        return(
                   <div>
         
            <div className={style.container}>
                <input  name="newItem" type='text' placeholder="enter the item" value={newItem} onChange={handleChange} />
                <input name="newPrice"  type='text' placeholder="enter the price" value={newPrice} onChange={handleChange} />

                <button className=" btn btn-success mr-2" 
                onClick={()=>handleUpdate(this.state)}
                >Update</button>
                <button className=" btn btn-danger" 
                onClick={handleCancel}
                >Cancel</button>

            </div>
               
            </div>
            )
    }
}

const mapStateToProps=(state)=>({
    todoData: state.todoReducer.todo,
    isUpdate: state.todoReducer.isUpdate
})

const mapDispatchToProps=(dispatch)=>({
    handleUpdate: (query)=>dispatch(handleUpdate(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditData)
