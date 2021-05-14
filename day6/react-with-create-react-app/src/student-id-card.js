import {useState,useEffect} from 'react'
import axios from 'axios'

export const StudentIdCard = () => {
    const [studentData, setStudentData] = useState({});

    useEffect(() => {
        axios.get('student.json').then(res=>{
            setStudentData(res.data)
       })
    }, [])

    return (
        
        <div style={{border:'black 1px solid',width:"250px",}}>
            <div>Name : {studentData.name} </div>
            <div>Roll No : {studentData.rollNumber}</div>
            <div>Contact No: {studentData.contactNo}</div>
            <div>Class : {studentData.class}</div>
            
        </div>
    )
}
