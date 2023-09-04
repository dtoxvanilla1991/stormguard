import { useEffect, useState } from "react";
import IWeatherModel from "../../domain/IWeatherModel";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import WeatherModel from "../../domain/WeatherModel";

const useHomePageLogic = (f7router: any) => {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const [selectedForecast, setSelectedForecast] = useState<
    IWeatherModel | undefined
  >(undefined);

  const weather: WeatherModel | undefined = useCurrentWeather();

  const dailyList: IWeatherModel[] = weather
    ? weather?.getDailyForecastList()
    : [];

  useEffect(() => {
    if (!weather) {
      f7router.navigate("/search/");
    }
  }, []);

  const handleForecastClick = (idx: number) => {
    if (dailyList?.length > 0) {
      setSelectedForecast(dailyList[idx]);
      setSheetOpen(true);
    }
  };

  const handleSheetClosed = (): void => setSheetOpen(false);

  const handleSearchClick = (): void => f7router.navigate("/search/");

  const handleGoHomeClick = (): void => f7router.navigate("/");

  return {
    sheetOpen,
    selectedForecast,
    weather,
    dailyList,
    handleSheetClosed,
    handleSearchClick,
    handleForecastClick,
    handleGoHomeClick,
  };
};

export default useHomePageLogic;
