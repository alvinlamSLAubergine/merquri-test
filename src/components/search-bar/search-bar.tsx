import { useRef } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { useSearchContext } from '../../context';
import { Typography } from '../typography';
import './search-bar.css';

export const SearchBar: React.FC = () => {
  const { search, errorMessage } = useSearchContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current?.value) {
      const city = inputRef.current.value;
      search(city);
    } else {
      inputRef.current?.focus();
      search('');
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
          />
        </div>
        <button
          className='SearchButton'
          onClick={handleSearch}
        >
          <SearchIcon className='SearchIcon' />
        </button>
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
