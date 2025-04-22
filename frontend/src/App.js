import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation';
import HomePage from './Customer/Pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
