import { GeolocationType } from "../../types";

export default interface IGeolocation {
  getCurrentLocationAsync(): Promise<GeolocationType | undefined>;
}
