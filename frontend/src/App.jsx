import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import './assets/styles/homepage.css';
import './assets/styles/login.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
