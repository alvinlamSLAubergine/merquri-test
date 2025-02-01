import SunIcon from '../../assets/sun.png';
import { Typography } from '../typography';
import './weather-details.css';

export const WeatherDetails: React.FC = () => {
  return (
    <div className='WeatherDetailsContainer'>
      <div className='WeatherDetails'>
        <img
          className='WeatherIcon'
          src={SunIcon}
        />
        <div className='WeatherDetailsDefault'>
          <Typography>Today's Weather</Typography>
          <div className='Temperature'>
            <Typography
              variant='large'
              color='purple'
            >
              26°
            </Typography>
          </div>
          <Typography>H: 29° L: 26°</Typography>
          <div className='WeatherTextBottomDefault'>
            <Typography
              variant='bold'
              color='secondary'
            >
              Johor, MY
            </Typography>
            <Typography color='secondary'>01-09-2022 09:41am</Typography>
            <Typography color='secondary'>Humidity: 58%</Typography>
            <Typography color='secondary'>Clouds</Typography>
          </div>
          <div className='WeatherTextBottomSM'>
            <Typography
              variant='bold'
              color='secondary'
            >
              Johor, MY
            </Typography>
          </div>
        </div>
        <div className='WeatherDetailsSM'>
          <Typography color='secondary'>Clouds</Typography>
          <Typography color='secondary'>Humidity: 58%</Typography>
          <Typography color='secondary'>01-09-2022 09:41am</Typography>
        </div>
      </div>
    </div>
  );
};
