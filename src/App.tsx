import { useEffect, useState } from 'react';
import { getWeather } from './api';
import './App.css';
import { BackgroundContainer, SearchBar, SearchHistory, WeatherDetails } from './components';
import { SearchProvider } from './context';
import { ThemeProvider } from './context/theme-context';
import { Weather } from './types';

const defaultWeather = {
  city: 'City',
  country: 'Country',
  date: new Date(),
  temperature: 0,
  description: 'Description',
  descriptionId: 0,
  high: 0,
  low: 0,
  humidity: 0,
};

function App() {
  const [initWeather, setInitWeather] = useState<Weather | undefined>(undefined);
  useEffect(() => {
    getWeather('Johor').then((weather) => {
      setInitWeather(weather || defaultWeather);
    });
  }, []);

  return (
    <div className='App'>
      {initWeather && (
        <SearchProvider
          currentWeather={initWeather}
          searchHistory={JSON.parse(localStorage.getItem('searchHistory') ?? '[]')}
        >
          <ThemeProvider>
            <BackgroundContainer>
              <SearchBar />
              <WeatherDetails>
                <SearchHistory />
              </WeatherDetails>
            </BackgroundContainer>
          </ThemeProvider>
        </SearchProvider>
      )}
    </div>
  );
}

export default App;
