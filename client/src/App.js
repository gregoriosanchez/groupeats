import {Route} from 'react-router-dom'

import './App.css';
import Cards from './components/molecules/com-cards';
import Product from './routes/products';
import Welcome from './routes/welcome';
import F from './theme'
function App() {
  return (
    <div>
      <h1 className={F.palette.SUCCESS}>GROUP-EATS</h1>
        <Cards/>
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
