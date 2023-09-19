import { GeolocationType } from "../../types";
import IGeolocation from "./IGeolocation";
import { Geolocation, PermissionStatus } from "@capacitor/geolocation";

export default class AppGeolocation implements IGeolocation {
  constructor() {}

  async getCurrentLocationAsync(): Promise<GeolocationType | undefined> {
    let hasPermission: boolean = false;

    try {
      const status: PermissionStatus = await Geolocation.checkPermissions();
      if (
        status.location === "granted" ||
        status.coarseLocation === "granted"
      ) {
        hasPermission = true;
      }
    } catch (ex) {}

    if (!hasPermission) {
      try {
        const status: PermissionStatus = await Geolocation.requestPermissions();

        if (
          status.location === "granted" ||
          status.coarseLocation === "granted"
        ) {
          hasPermission = true;
        }
      } catch (ex) {}
    }

    let result: GeolocationType | undefined = undefined;

    try {
      const position = await Geolocation.getCurrentPosition();
      console.log(position);
      if (position) {
        result = {
          lon: position?.coords?.longitude,
          lat: position?.coords.latitude,
        };
      }
    } catch (ex) {}

    return result;
  }
}
