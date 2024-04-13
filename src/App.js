import logo from './logo.svg';
import './App.css';
import Overview from './components/Overview'
import BudgetStats from './components/BudgetStats'
import CategoriesStats from './components/CategoriesStats';
import Form from './components/Form';
import History from './components/History';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">
        Expense Tracker App
      </h1>
      <Overview/>
      <div className="stats-container">
       <BudgetStats/>
       <CategoriesStats/>
      </div>

      <div className="transactions-container">
        <Form/>
        <History/>
      </div>

      <Footer/>
      
    </div>
  );
}

export default App;
