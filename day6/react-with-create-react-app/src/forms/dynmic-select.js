import React from 'react'

const DynmicSelect = (props) => {
    return (
        <>
        <label for="coursesEnrolled">Select Dynamic{props.serial}:</label>
        <select name="coursesEnrolled" >
                    <option value="">Please Select</option>
                    <option value="MERN">MERN</option>
                    <option value="MEAN">MEAN</option>
                    <option value="REACT">REACT</option>
                    <option value="ANGULAR">ANGULAR</option>
        </select>
        </>
    )
}

export default DynmicSelect
