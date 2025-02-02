import { createContext, PropsWithChildren, useContext, useReducer } from 'react';
import { SearchHistory, Weather } from '../types';

interface Props extends PropsWithChildren, Omit<SearchState, 'errorMessage'> {}

interface SearchState {
  currentWeather: Weather;
  searchHistory: SearchHistory[];
  errorMessage: string;
}

interface SearchAction {
  type: 'SEARCH' | 'DELETE_SEARCH';
  payload: string;
}

interface SearchContext extends SearchState {
  search: (payload: string) => void;
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
  errorMessage: '',
  search: () => {},
  deleteSearch: () => {},
};

const SearchContext = createContext<SearchContext>(defaultContext);

export const useSearchContext = () => useContext(SearchContext);
export const SearchProvider: React.FC<Props> = ({ children, currentWeather, searchHistory }) => {
  const [searchState, dispatch] = useReducer(searchReducer, {
    currentWeather,
    searchHistory,
    errorMessage: '',
  });

  return (
    <SearchContext.Provider
      value={{
        ...searchState,
        search: (payload: string) => dispatch({ type: 'SEARCH', payload }),
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
      if (!action.payload) {
        return { ...state, errorMessage: 'Please enter a city' };
      }
      return { ...state, errorMessage: '' };
    case 'DELETE_SEARCH':
      const searchHistory = state.searchHistory.filter((search) => search.id !== action.payload);
      return { ...state, searchHistory };
    default:
      return state;
  }
}
