import './App.css';
import Overview from './components/Overview'
import BudgetStats from './components/BudgetStats'
import CategoriesStats from './components/CategoriesStats';
import Form from './components/Form';
import History from './components/History';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app-container">
      <div className="container mx-auto px-4">
      <h1 className="lg:text-3xl sm:text-lg font-bold text-center mt-4 text-white">
        Expense Tracker App
      </h1>
      <Overview/>
      <div className="stats-container mt-12 flex lg:justify-between  justify-center flex-wrap md:flex-nowrap">
       <BudgetStats/>
       <CategoriesStats/>
      </div>

      <div className="transactions-container mt-12 flex lg:justify-between  justify-center flex-wrap md:flex-nowrap">
        <Form/>
        <History/>
      </div>

      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
