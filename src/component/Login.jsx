import React from 'react';
import style from './Login.module.css'
import { connect } from 'react-redux';
import { userAuth } from '../AuthRedux/action';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {             
            username:'',
            password:'',          
         }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    render() { 
        const {username, password} = this.state;
        const {handleChange} = this
        const { userAuth,loginRes, isAuth } = this.props;
        // console.log(store.getState().isLogin)
        console.log( isAuth)
        // if(loginRes && loginRes.error==false){
        //    return <Redirect to ="/"/>
        // }

        return ( 
            <div className={style.card}>
                
                <h2 className="text-center pt-3">Login page</h2>
                <br/>
                <div className='form-row mt-1 p-4' >
                    <div className="form-group col-12">
                        <div className="row">
                    <label className="col-4" htmlFor="name"><h5>User Name</h5></label>
                <input className="form-control col-7" type="text" value={username} name="username" onChange={handleChange} /></div>
                </div>
                <br/>
                <div className="form-group col-12">
                    <div className="row">
                    <label className="col-4" htmlFor="name"><h5>Password</h5></label>
                <input className="form-control col-7" type="password" value={password} name="password" onChange={handleChange} /></div>
                </div>
                <br/>
                </div>
                <div className="text-center pb-3">
                <button className="btn btn-primary" 
                onClick={()=>userAuth(this.state)}
                >Login</button>
                <button className="btn btn-primary ml-3" 
                // onClick={()=>userLogin(this.state)}
                >New User? Signup</button>
            </div>
            </div>
         );
    }
}

const mapStateToProps=(state)=>({
    loginRes: state.authReducer.userData.data,
    isAuth: state.authReducer
})

const mapDispatchToProps=(dispatch)=>({
    userAuth: query=>dispatch(userAuth(query))
    // handleLogin: ()=>dispatch(handleLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);