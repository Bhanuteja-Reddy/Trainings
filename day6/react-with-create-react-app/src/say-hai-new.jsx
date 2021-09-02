import React from 'react'

function SayHaiNew(props) {
    return (
        <div>            
           Hai  {props.gender == 'male' ? 'Mr' : props.gender == 'fe-male' ? 'Mrs' : ''} {props}
        
        </div>
    )
}

export default SayHaiNew
