import { Page } from "framework7-react";
import useLoadWeatherList from "../../hooks/useWeatherList";

import "./style.css";
import useLoadingLogic from "./useLoadingLogic";

type LoadingProps = {
  f7route: any;
  f7router: any;
};

const LoadingScreen = (props: LoadingProps) => {
  const { f7route, f7router } = props;

  useLoadWeatherList();

  useLoadingLogic(f7router);

  return (
    <Page name="loading">
      <picture className="loading-container">
        <img
          src="../../assets/stormguard_logo.svg"
          height={100}
          width={100}
          alt={"stormguard logo"}
          loading={"lazy"}
        />
        <h2>StormGuard</h2>
        <p className={"helper-message"}>
          Getting freshest weather for you. Hold on...
        </p>
      </picture>
    </Page>
  );
};

export default LoadingScreen;
