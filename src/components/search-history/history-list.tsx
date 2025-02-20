import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { SearchHistory } from '../../types';
import { Typography } from '../typography';
import './history-list.css';

interface ListProps {
  history: SearchHistory[];
  onSearch: (history: SearchHistory) => void;
  onDelete: (id: string) => void;
}

interface ListItemProps {
  history: SearchHistory;
  onSearch: (history: SearchHistory) => void;
  onDelete: (id: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ history, onSearch, onDelete }) => {
  const { country, city, date } = history;

  return (
    <li className='ListItem'>
      <div className='ListItemText'>
        <Typography>{`${city}, ${country}`}</Typography>
        <Typography
          variant='subtitle'
          color='subtitle'
        >
          {date.toLocaleString()}
        </Typography>
      </div>
      <div className='ListItemTextSM'>
        <Typography>{`${city}, ${country}`}</Typography>
        <Typography
          variant='subtitle'
          color='subtitle'
        >
          {date.toLocaleString()}
        </Typography>
      </div>
      <button
        className='IconButton'
        onClick={() => onSearch(history)}
      >
        <SearchIcon className='Icon' />
      </button>
      <button
        className='IconButton'
        onClick={() => onDelete(history.id)}
      >
        <DeleteIcon className='Icon' />
      </button>
    </li>
  );
};

export const HistoryList: React.FC<ListProps> = ({ history, onSearch, onDelete }) => {
  return (
    <div className='HistoryListContainer'>
      <ul className='HistoryList'>
        {history.map((item) => (
          <ListItem
            key={item.id}
            history={item}
            onSearch={onSearch}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
