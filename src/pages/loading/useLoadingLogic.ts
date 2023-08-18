import { useEffect } from "react";

import useLoadWeatherList from '../../hooks/useWeatherList';
import useFetchWeather from '../../hooks/useFetchWeather';
import useGeolocation from '../../hooks/useGeolocation';
import { GeolocationType } from "../../types";
import useCurrentWeather from "../../hooks/useCurrentWeather";


const useLoadingLogic = (f7router: any) => {

    useLoadWeatherList();
    const currentWeather = useCurrentWeather();
    const { loading, error, fetchWeather } = useFetchWeather();
    const { currentLocation, geolocationReady } = useGeolocation();


    useEffect(() => {

        const searchScreen = '/search/';
        const weatherScreen = '/weather/';

        const navigateOptions = {
            reloadCurrent: true
        };

        if (!currentWeather && geolocationReady && loading === 'idle') {
            if (currentLocation) {
                fetchWeather((location as unknown) as GeolocationType);
            } else {
                setTimeout(() => {
                    f7router.navigate(searchScreen, navigateOptions);
                }, 2000);
            }
        } else if (currentWeather && loading === 'idle') {
            fetchWeather(currentWeather.getName());
        }

        if (loading === 'succeeded') {
            setTimeout(() => {
                f7router.navigate(weatherScreen, navigateOptions);
            }, 2000);
        } if (loading === 'failed') {
            setTimeout(() => {
                f7router.navigate(searchScreen, navigateOptions);
            }, 2000);
        }

    }, [currentWeather, loading, geolocationReady]);
};

export default useLoadingLogic;