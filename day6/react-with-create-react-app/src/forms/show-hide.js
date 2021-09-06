import React, { useState ,useEffect} from 'react'
import axios from 'axios';
const ShowHide = () => {
    const [showElement, setShowElement] = useState(true);
    useEffect(() => {
        fetchData()
      }, []);
    
    
      const fetchData=()=>{
        axios.get('list.json').then(res=>{
          console.log(res)
        })
      }
    const toggleElement = () => {
        setShowElement((prevState) => !prevState);
    }
    return (
        <div>
            {showElement ? <div>Show/hide</div> : <></>}
            <button onClick={toggleElement}>{showElement ? 'hide' : 'show'} </button>
        </div>
    )
}

export default ShowHide
