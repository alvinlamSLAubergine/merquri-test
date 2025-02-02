import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { Typography } from '../typography';
import './search-bar.css';

export const SearchBar: React.FC = () => {
  return (
    <>
      <div className='SearchBarContainer'>
        <div className='SearchBar'>
          <div className='SearchTitle'>City</div>
          <input
            className='SearchInput'
            type='text'
            placeholder='Search for a city (e.g. London / Paris, FR)'
          />
        </div>
        <button className='SearchButton'>
          <SearchIcon className='SearchIcon' />
        </button>
      </div>
      <div className='ErrorMessageContainer'>
        <div className='ErrorMessage'>
          <Typography
            color='error'
            variant='subtitle'
          >
            Error msg
          </Typography>
        </div>
      </div>
    </>
  );
};
