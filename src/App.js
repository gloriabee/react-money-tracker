import './App.css';
import Overview from './components/Overview'
import BudgetStats from './components/BudgetStats'
import CategoriesStats from './components/CategoriesStats';
import Form from './components/Form';
import History from './components/History';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative mx-auto h-screen">
      <h1 className="lg:text-3xl sm:text-lg font-bold text-center mt-4">
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
