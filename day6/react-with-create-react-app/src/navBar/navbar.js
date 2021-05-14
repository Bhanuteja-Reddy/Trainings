import './navbar.css'
import React from 'react'

function NavBar(props){
    const clickMe=()=>{
        alert(`ýou just clocked me`);
    }
    return (
        <React.Fragment>
        <nav className={props.theam ? 'light' :"darkNavBar"}>
           <ul style={{display:'flex',justifyContent:'space-around'}}>
              {props.links.map((link,ind)=>{
                return <a><li>{`link ${ind+1}` }</li></a>
              })} 
               
           </ul>
        </nav>
        </React.Fragment>
    )
}
export default NavBar;