import React,{useContext} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import {UserContext}from '../App'

export default function Navbar() {
  const Navigate=useNavigate()
  const removeLocal=()=>{
    localStorage.clear()
    dispatch({type:"CLEAR"})
Navigate('/login')
  }
const {state,dispatch}=useContext(UserContext)
const RenderList=()=>{
  if(state)
  {
    return(
      <div>
<li><NavLink className="nav-links"  to="/createPost">Create Post</NavLink></li>
<li><NavLink className="nav-links"  to="/profile">Profile</NavLink></li>
<li>
  <button className="btn waves-effect-light #64b5f6 red darken" onClick={removeLocal}>
Logout
  </button>
</li>
      </div>
    )
  }
  return (
    <div>
       <li><NavLink className="nav-links"  to="/login">Login</NavLink></li>
        
        <li><NavLink className="nav-links"  to="/signup">Signup</NavLink></li>
       
    </div>
  )
}
  return (
    <div>
      
  <nav>
    <div className="nav-wrapper white">
      <a href='#' className="left brand-logo">Instagram</a>
      <ul id="nav-mobile" className="right ">
       <RenderList/>
      </ul>
    </div>
  </nav>
        
    </div>
  )
}
