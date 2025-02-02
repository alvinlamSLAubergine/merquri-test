import './App.css';
import { BackgroundContainer, SearchBar, SearchHistory, WeatherDetails } from './components';

function App() {
  return (
    <div className='App'>
      <BackgroundContainer>
        <SearchBar />
        <WeatherDetails>
          <SearchHistory />
        </WeatherDetails>
      </BackgroundContainer>
    </div>
  );
}

export default App;
