import { Button } from "framework7-react";
import WeatherModel from "../../domain/WeatherModel";
import "./style.css";

type WeatherListProps = {
  weatherList?: WeatherModel[];
  onClick: (location: string) => void;
};

const WeatherList = (props: WeatherListProps) => {
  const { weatherList, onClick } = props;

  return (
    <div>
      {weatherList &&
        weatherList.map((weather, index) => (
          <Button
            className="location-weather-button"
            onClick={() => onClick(weather.getName())}
            key={weather.getName()}
          >
            <div className="location-weather-item">
              <span>{weather.getName()}</span>
              <span>{weather.getTemperatureWithSymbol()}</span>{" "}
              <img
                src={weather.getIcon()}
                alt={"current weather icon"}
                loading={"lazy"}
              />
            </div>
          </Button>
        ))}
    </div>
  );
};

export default WeatherList;
