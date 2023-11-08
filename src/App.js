import './App.css';
import Header from './components/Header';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
