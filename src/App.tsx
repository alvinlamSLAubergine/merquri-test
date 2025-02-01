import './App.css';
import { BackgroundContainer, SearchBar, WeatherDetails } from './components';

function App() {
  return (
    <div className='App'>
      <BackgroundContainer>
        <SearchBar />
        <WeatherDetails />
      </BackgroundContainer>
    </div>
  );
}

export default App;
