import { ReactComponent as DarkIcon } from '../../assets/dark-icon.svg';
import { ReactComponent as LightIcon } from '../../assets/light-icon.svg';
import { useTheme } from '../../context/theme-context';

export const LightModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className='SearchButton'
      onClick={toggleTheme}
    >
      {theme === 'light' && <LightIcon className='SearchIcon' />}
      {theme === 'dark' && <DarkIcon className='SearchIcon' />}
    </button>
  );
};
