import './App.css';
import { BackgroundContainer, SearchBar, SearchHistory, WeatherDetails } from './components';
import { SearchProvider } from './context';

function App() {
  return (
    <div className='App'>
      <SearchProvider
        currentWeather={{
          city: 'City',
          country: 'Country',
          date: new Date(),
          temperature: 0,
          description: 'Description',
          descriptionId: 0,
          high: 0,
          low: 0,
          humidity: 0,
        }}
        searchHistory={[]}
      >
        <BackgroundContainer>
          <SearchBar />
          <WeatherDetails>
            <SearchHistory />
          </WeatherDetails>
        </BackgroundContainer>
      </SearchProvider>
    </div>
  );
}

export default App;
