import {Route} from 'react-router-dom'

import './App.css';
import Product from './routes/products';
import Welcome from './routes/welcome';

function App() {
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
