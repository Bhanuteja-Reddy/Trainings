import React from 'react'

const DisplayUser = (props) => {
    
    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>
            {props.users.map(user=>{
                return <div key={user.email} style={{border:'1px solid black'}}>{user.username} <button onClick={()=>props.editUser(user)}>edit</button> <button onClick={()=>{props.deleteUser(user.email)}}>delete</button></div>
            })}
        </div>
    )
}

export default DisplayUser
