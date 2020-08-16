import React from 'react'
// import { AppContext } from '../utils/AppProvider'
import style from './Home.module.css'
import { connect } from 'react-redux';
import {addToTodo} from '../TodoRedux/action';
import TodoList from './TodoList'
import { Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Complete from './Complete';

 class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            item:'',
            price:'',
            id: ''
            // todo:[]
        }
    }

    handleChange=(e)=>{
        this.setState({
          [e.target.name]: e.target.value,       
        })
       
      }

      handleReset=()=>{
          this.setState({
              item:'',
              price:''
          })
      }

    render(){
       const { addToTodo, todoDataList, isAuth } =this.props;
        const {item, price, id} = this.state
        const stateData = {...this.state, id:uuidv4()}
        // console.log(isAuth)
        // if(isAuth===false){
        //    return <Redirect to="/login"/>
        // }
        return(
            <div>
                <h6 className="text-center" style={{color:"#ffff00"}}>Total Items in Todo is {todoDataList.length}</h6>
            <div className={style.container}>
                <input  name="item" type='text' placeholder="enter the item" value={item} onChange={this.handleChange} />
                <input name="price"  type='text' placeholder="enter the price" value={price} onChange={this.handleChange} />

                <button className=" btn btn-primary" onClick={()=>addToTodo(stateData)}>Add Item</button>

            </div>
            
            <TodoList />
            <div className="mt-4">
            

            <Complete />
            </div>
            
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    todoDataList: state.todoReducer.todo,
    isAuth: state.authReducer.isAuth
})

const mapDispatchToProps=(dispatch)=>({
    addToTodo: (query)=>dispatch(addToTodo(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
