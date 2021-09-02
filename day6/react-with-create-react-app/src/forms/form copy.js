import React, { useState } from 'react';

export const Form = () => {
    const [formData, setFormData] = useState({});

    const texNameHandler = (event) => {
        const key=event.target.name;
        const value=event.target.value;
        setFormData({...formData,key:value});
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();

    }
    return (
        <form onSubmit={handleSubmit}>
            <lable>Enter Your Name</lable>
            <input type="text" onChange={texNameHandler} value={formData.name} name="name"/>
            <input type="number" onChange={texNameHandler} value={formData.age} name="age"/>
            <input type="submit" />
        </form>
    )
}
export default Form;
