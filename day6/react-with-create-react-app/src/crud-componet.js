import React, { useState,useEffect } from 'react';
import Form from './forms/form';
import Table from './table/table';

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
                <Form submitRegistrationData={submitRegistrationData} abc={'1'} a={'1'} b={'1'} c={'1'} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Table productList={registrationData} />
            </div>
        </div>
    )
}

export default CrudComponent
