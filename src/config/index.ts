import { AppConfig } from "../types";

const config: AppConfig = Object.freeze({
    weatherApiKey: process.env.OPEN_WEATHER_MAP_API_KEY
});

export default config;