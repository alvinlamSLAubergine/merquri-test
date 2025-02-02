import { Typography } from '../typography';
import { HistoryList } from './history-list';
import './search-history.css';

export const SearchHistory: React.FC = () => {
  return (
    <div className='SearchHistoryContainer'>
      <div className='SearchHistoryTitle'>
        <Typography>Search History</Typography>
      </div>
      <HistoryList
        history={[
          {
            id: '1',
            country: 'Malaysia',
            date: new Date(),
          },
          {
            id: '2',
            country: 'Singapore',
            date: new Date(),
          },
        ]}
        onSearch={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
};
