import {Route} from 'react-router-dom'

import './App.css';
import Product from './routes/products';
import Welcome from './routes/welcome';
import { getPersonalInfoById, getPersonalInfoList } from "./api/personalInfo";
import { login } from "./api/auth";
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    // getPersonalInfoList()
    // .then(data=>{
    //   console.log(data)
    // })

    // getPersonalInfoById('001')
    // .then(data=>{
    //   console.log(data)
    // })

    login("jhoan", "12345")    
    .then(data=>{
       console.log(data)
     })
     .catch(error=>{
      console.log(error)
     })
    
  },[])

  return (
    <div>
      <h1>GROUP-EATS</h1>
      <Route path="/welcome">
        <Welcome/>
      </Route>

      <Route path="/products">
        <Product/>
      </Route>
    </div>
  );
}

export default App;
