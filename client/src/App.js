import './App.css';
import Cards from './components/molecules/com-cards';
import F from './theme'
function App() {
  return (
    <div>
      <h1 className={F.palette.SUCCESS}>GROUP-EATS</h1>
        <Cards/>
    </div>
  );
}

export default App;
