import { AppConfig } from "../types";

const config: AppConfig = Object.freeze({
    weatherApiKey: import.meta.env.OPEN_WEATHER_MAP_API_KEY
});

export default config;