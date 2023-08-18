export type AppConfig = {
  weatherApiKey: string | undefined;
};

export type GeolocationType = {
  lon: number;
  lat: number;
};

export type TypeLocation = string | GeolocationType;
