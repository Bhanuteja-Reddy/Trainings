import axios from 'axios';
import React, { useState, useEffect } from 'react'
import DisplayUser from './display-user';
import FormComponent from './form-component';
import { User } from './models/user';

const CrudHrms = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        //'http://15.207.229.231:8000/machstatz/get_all_users'
        axios.get('https://docs.google.com/spreadsheets/d/1eV7FewojCsDRAfsiQA_Y5TVfPTsQHaWL/edit#gid=1348719354').then(res => {
            if (res.status == 200) {
                const dummyUsers = [new User('abc@gmail.com', 'fname', 'lname', 'pwd', 'userName'), new User('abc1@gmail.com', 'fname1', 'lname1', 'pwd1', 'userName1')]
                setUsers(dummyUsers);//res.data
            } else {
                alert(`Request failed with status code ${res.status}`)
            }
        }).catch(err => {
            alert(err.message)
        })
    }
    const editUser = (user) => {
        alert(JSON.stringify(user));
    }

    const deleteUser = (email) => {
        alert(email);
    }

    return (
        <div>
            <DisplayUser users={users} editUser={editUser} deleteUser={deleteUser}></DisplayUser>
            <FormComponent></FormComponent>
        </div>
    )
}

export default CrudHrms
