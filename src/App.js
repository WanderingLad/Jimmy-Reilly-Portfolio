import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import PortfolioContainer from './components/PortfolioContainer';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App" style={{backgroundColor: '#212121',color: 'white'}}>
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
