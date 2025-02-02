import { getWeather } from '../../api';
import { useSearchContext } from '../../context';
import { SearchHistory as History } from '../../types';
import { Typography } from '../typography';
import { HistoryList } from './history-list';
import './search-history.css';

export const SearchHistory: React.FC = () => {
  const { searchHistory, search, deleteSearch } = useSearchContext();
  const handleSearch = (history: History) => {
    getWeather(history.city).then((weather) => {
      if (weather) {
        search(weather);
      }
    });
  };

  return (
    <div className='SearchHistoryContainer'>
      <div className='SearchHistoryTitle'>
        <Typography>Search History</Typography>
      </div>
      <HistoryList
        history={searchHistory}
        onSearch={handleSearch}
        onDelete={deleteSearch}
      />
    </div>
  );
};
