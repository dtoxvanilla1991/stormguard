import { useEffect, useState } from "react";
import { GeolocationType } from "../types";
import AppGeolocation from "../device/geolocation/AppGeolocation";

const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState<
    GeolocationType | undefined
  >(undefined);
  const [geolocationReady, setGeolocationReady] = useState<boolean>(false);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const location = await new AppGeolocation().getCurrentLocationAsync();

        setCurrentLocation(location);
        setGeolocationReady(true);
      } catch (ex) {}
    };

    getLocation();
  }, []);

  return {
    currentLocation,
    geolocationReady,
  };
};

export default useGeolocation;
