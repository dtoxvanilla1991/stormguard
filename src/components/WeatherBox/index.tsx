import { Block, Button, Icon } from "framework7-react";
import WeatherModel from "../../domain/WeatherModel";

import "./style.css";
import { useCallback } from "react";

type WeatherBoxProps = {
  model: WeatherModel;
  onSearchClick: () => void;
};

const WeatherBox = ({ model, onSearchClick }: WeatherBoxProps) => {
  const temperatureLevel = useCallback((): string => {
    if (model.getTemperature() > 20) {
      return "yellow";
    } else if (model.getTemperature() > 10) {
      return "green";
    } else if (model.getTemperature() > 0) {
      return "blue";
    } else {
      return "red";
    }
  }, []);

  const backgroundColor = useCallback((): string => {
    if (model.getDescription().indexOf("clear sky") !== -1) {
      return "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/light_clouds.jpg)";
    } else if (model.getDescription().indexOf("clouds") !== -1) {
      return "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/heavy_clouds.jpg)";
    } else if (model.getDescription().indexOf("rain") !== -1) {
      return "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/rain.jpg)";
    } else if (model.getDescription().indexOf("snow") !== -1) {
      return "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/snow.jpg)";
    } else if (model.getDescription().indexOf("thunderstorm") !== -1) {
      return "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/thunderstorm.jpg)";
    } else if (model.getDescription().indexOf("sunny") !== -1) {
      return "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/sunny.jpg)";
    } else if (model.getDescription().indexOf("mist") !== -1) {
      return "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/mist.jpg)";
    }
    return "rgba(77, 168, 209, 0.5)";
  }, [model]);

  return (
    <Block
      strong
      inset
      className="weather-box"
      style={{
        backgroundImage: backgroundColor(),
      }}
    >
      <Button className="btn-search" onClick={() => onSearchClick()}>
        <Icon f7="search" />
      </Button>
      <span className="city-title">{model?.getName()}</span>
      <div className="weather-box-temp-wrapper">
        <img src={model?.getIcon()} alt={"weather icon"} loading={"lazy"} />
        <span>{model?.getTemperatureWithSymbol()}</span>
      </div>
      <span>{model?.getDescription()}</span>
      <div className="weather-box-info">
        <span>Humidity: {model?.getHumidity()}%</span>
        <span>Wind: {model?.getWindSpeed()} m/s</span>
      </div>
    </Block>
  );
};

export default WeatherBox;
