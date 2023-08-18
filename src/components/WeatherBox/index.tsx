import { Block, Button, Icon } from "framework7-react";
import WeatherModel from "../../domain/WeatherModel";

import './style.scss';

type WeatherBoxProps = {
    model: WeatherModel;
    onSearchClick: () => void;
};

const WeatherBox = ({ model, onSearchClick }: WeatherBoxProps) => {

    return (
        <Block strong inset className="weather-box">
            <Button className="btn-search" onClick={() => onSearchClick()}><Icon f7="search" /></Button>
            <span className="city-title">
                {model?.getName()}
            </span>
            <div className='weather-box-temp-wrapper'>
                <img src={model?.getIcon()} alt={"weather icon"}/>
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