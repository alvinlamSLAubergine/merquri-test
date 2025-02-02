import { useRef, useState } from 'react';
import { getWeather } from '../../api';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { useSearchContext } from '../../context';
import { Typography } from '../typography';
import { LightModeToggle } from './light-mode-toggle';
import './search-bar.css';

export const SearchBar: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { search } = useSearchContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current?.value) {
      const city = inputRef.current.value;
      getWeather(city).then((weather) => {
        if (weather) {
          search(weather);
          setErrorMessage('');
        } else {
          setErrorMessage(`City "${city}" not found`);
        }
      });
    } else {
      inputRef.current?.focus();
      setErrorMessage('Please enter a city');
    }
  };

  return (
    <>
      <div className='SearchBarContainer'>
        <div className='SearchBar'>
          <div className='SearchTitle'>City</div>
          <input
            autoFocus
            ref={inputRef}
            className='SearchInput'
            type='text'
            placeholder='Search for a city (e.g. London / Paris, FR)'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </div>
        <button
          className='SearchButton'
          onClick={handleSearch}
        >
          <SearchIcon className='SearchIcon' />
        </button>
        <LightModeToggle />
      </div>
      <div className='ErrorMessageContainer'>
        <div className='ErrorMessage'>
          <Typography
            color='error'
            variant='subtitle'
          >
            {errorMessage}
          </Typography>
        </div>
      </div>
    </>
  );
};
