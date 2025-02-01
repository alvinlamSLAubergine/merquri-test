import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import './search-bar.css';

export const SearchBar: React.FC = () => {
  return (
    <div className='SearchBarContainer'>
      <div className='SearchBar'>
        <div className='SearchTitle'>Country</div>
        <input
          className='SearchInput'
          type='text'
        />
      </div>
      <button className='SearchButton'>
        <SearchIcon className='SearchIcon' />
      </button>
    </div>
  );
};
