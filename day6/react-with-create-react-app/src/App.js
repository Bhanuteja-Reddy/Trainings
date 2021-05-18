import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'
import SayHello from './say-hello';
import NavBar from './navBar/navbar';
import Timer from './timer/timer'
import TimerClass from './timer/timer-class';
import { List } from './list';
import {StudentIdCard} from './student-id-card';
import {ProductDisplayGrid} from './product-display-grid';
import Form from './forms/form'
import Table from './table/table'

function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios.get('product-data.json').then(res => {
        setProductList(res.data)
    })
}, [])

  return (
    <div className="App">
      {/* <NavBar links={[0, 1, 2, 3, 5, 6, 7, 8, 9, 10]} theam={'light'} /> */}
      {/* <SayHello name={'Bhanuteja Reddy'} gender={'Male'}/>
      <SayHello name={'Harish Naidu'} gender={'Male'}/>
      <SayHello name={'LaxmiBhai'} gender={'FeMale'}/> */}
      {/* <Timer />
      <TimerClass /> */}
      <List />
      {/* <StudentIdCard /> */}
      {/* <ProductDisplayGrid /> */}
      {/* <Form /> */}
      <Table key={Date.now()} productList={productList}/>
    </div>
  );
}

export default App;
