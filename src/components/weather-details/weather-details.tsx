import { PropsWithChildren } from 'react';
import CloudIcon from '../../assets/cloud.png';
import SunIcon from '../../assets/sun.png';
import { useSearchContext } from '../../context';
import { Typography } from '../typography';
import './weather-details.css';

const getWeatherIcon = (descriptionId: number) => {
  const sunnyDescriptionIds = [800, 801, 802, 500];
  if (sunnyDescriptionIds.includes(descriptionId)) {
    return SunIcon;
  }
  return CloudIcon;
};

export const WeatherDetails: React.FC<PropsWithChildren> = ({ children }) => {
  const { currentWeather } = useSearchContext();
  const { city, country, date, temperature, high, low, humidity, description, descriptionId } = currentWeather;

  return (
    <div className='WeatherDetailsContainer'>
      <div className='WeatherDetails'>
        <div className='WeatherDetailsHeader'>
          <img
            className='WeatherIcon'
            src={getWeatherIcon(descriptionId)}
          />
          <div className='WeatherDetailsDefault'>
            <Typography>Today's Weather</Typography>
            <div className='Temperature'>
              <Typography
                variant='large'
                color='purple'
              >
                {temperature}°
              </Typography>
            </div>
            <Typography>{`H: ${high}° L: ${low}°`}</Typography>
            <div className='WeatherTextBottomDefault'>
              <Typography
                variant='bold'
                color='secondary'
              >
                {`${city}, ${country}`}
              </Typography>
              <Typography color='secondary'>{date.toLocaleString()}</Typography>
              <Typography color='secondary'>{`Humidity: ${humidity}%`}</Typography>
              <Typography color='secondary'>{description}</Typography>
            </div>
            <div className='WeatherTextBottomSM'>
              <Typography
                variant='bold'
                color='secondary'
              >
                {`${city}, ${country}`}
              </Typography>
            </div>
          </div>
          <div className='WeatherDetailsSM'>
            <Typography color='secondary'>{description}</Typography>
            <Typography color='secondary'>{`Humidity: ${humidity}%`}</Typography>
            <Typography color='secondary'>{date.toLocaleString()}</Typography>
          </div>
        </div>
        {children && <div className='WeatherDetailsChildren'>{children}</div>}
      </div>
    </div>
  );
};
