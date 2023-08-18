import { ForecastWeatherType, TemperatureType } from "./types";

export default interface IWeatherModel {
  getRawData(): any;
  getTemperature(tempType?: TemperatureType): number;
  getTemperatureWithSymbol(tempType?: TemperatureType): string;
  getHumidity(): number;
  getDescription(): string;
  getWeather(): ForecastWeatherType;
  getWindSpeed(): number;
  getDayNumber(): number;
  getDayName(): string;
  getFormatedDay(): string;
  getIcon(): string;
}
