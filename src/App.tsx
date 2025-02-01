import './App.css';
import { BackgroundContainer } from './components';
import { SearchBar } from './components/search-bar/search-bar';

function App() {
  return (
    <div className='App'>
      <BackgroundContainer>
        <SearchBar />
      </BackgroundContainer>
    </div>
  );
}

export default App;
