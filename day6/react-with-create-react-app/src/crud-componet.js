import React, { useState,useEffect } from 'react';
import Form from './forms/form'
import Table, { RenderTableRow } from './table/table'

const CrudComponent = () => {
    const [registrationData, setRegistrationData] = useState([]);

    const submitRegistrationData=(data)=>{
        setRegistrationData((state)=>{
            return [...state,data];
        });
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form submitRegistrationData={submitRegistrationData} /></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Table key={Date.now()} productList={registrationData} /></div>
        </div>
    )
}

export default CrudComponent
