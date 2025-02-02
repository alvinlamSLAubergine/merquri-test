import { createContext, PropsWithChildren, useContext, useReducer } from 'react';
import { SearchHistory, Weather } from '../types';

interface Props extends PropsWithChildren, SearchState {}

interface SearchState {
  currentWeather: Weather;
  searchHistory: SearchHistory[];
}

interface SearchAction {
  type: 'SEARCH' | 'DELETE_SEARCH';
  payload: Weather | string;
}

interface SearchContext extends SearchState {
  search: (payload: Weather) => void;
  deleteSearch: (payload: string) => void;
}

const defaultContext: SearchContext = {
  currentWeather: {
    city: '',
    country: '',
    date: new Date(),
    temperature: 0,
    description: '',
    descriptionId: 0,
    high: 0,
    low: 0,
    humidity: 0,
  },
  searchHistory: [],
  search: () => {},
  deleteSearch: () => {},
};

const SearchContext = createContext<SearchContext>(defaultContext);

export const useSearchContext = () => useContext(SearchContext);
export const SearchProvider: React.FC<Props> = ({ children, currentWeather, searchHistory }) => {
  const [searchState, dispatch] = useReducer(searchReducer, {
    currentWeather,
    searchHistory,
  });

  return (
    <SearchContext.Provider
      value={{
        ...searchState,
        search: (payload: Weather) => dispatch({ type: 'SEARCH', payload }),
        deleteSearch: (payload: string) => dispatch({ type: 'DELETE_SEARCH', payload }),
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case 'SEARCH':
      const weather = action.payload as Weather;
      const newSearchHistory = updateSearchHistory(
        {
          id: generateId(),
          city: weather.city,
          country: weather.country,
          date: weather.date,
        },
        state.searchHistory
      );

      localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
      return {
        ...state,
        currentWeather: weather,
        searchHistory: newSearchHistory,
      };
    case 'DELETE_SEARCH':
      const searchHistory = state.searchHistory.filter((search) => search.id !== action.payload);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      return { ...state, searchHistory };
    default:
      return state;
  }
}

const MAX_HISTORY = 10;
const updateSearchHistory = (newEntry: SearchHistory, searchHistory: SearchHistory[]) => {
  const lastHistory = searchHistory[0];
  const newHistory = [...searchHistory];
  if (!(newEntry.city === lastHistory?.city && newEntry.country === lastHistory?.country)) {
    newHistory.unshift(newEntry);
  }

  if (newHistory.length > MAX_HISTORY) {
    return newHistory.slice(0, MAX_HISTORY);
  }
  return newHistory;
};

const generateId = () => {
  const date = new Date();
  return Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ).toString();
};
