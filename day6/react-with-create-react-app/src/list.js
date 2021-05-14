import {useState,useEffect} from 'react';
import axios from 'axios'

export const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('list.json').then(res=>{
           setList(res.data)
       })
    }, [])

    return (
        <div>
            <ul>
               {list.map(listItems=>{
                return <li key={Math.random()}>{listItems.key}</li>
               })}
            </ul>
            
        </div>
    )
}
