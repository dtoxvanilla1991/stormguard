export type ForecastWeatherType = {
    id: number,
    main: string,
    description: string,
    icon: string;
};

export type ForecastTemperatureType = {
    day: number,
    min: number,
    max: number,
    night: number,
    eve: number,
    morn: number;
};

export type TemperatureType = undefined | 'min' | 'max';