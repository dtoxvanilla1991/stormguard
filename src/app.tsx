import { getDevice } from "framework7/lite/bundle";
import { App, View } from "framework7-react";

import routes from "./ts/routes";
import { Device, Framework7Parameters } from "framework7/types";
import store from "./ts/store";
import { Provider } from "react-redux";

const MyApp = () => {
  const device: Device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: "StormGuard",
    theme: "md",
    colors: {
      primary: "#65c2f7",
    },
    darkMode: true,

    routes: routes,

    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  } as Framework7Parameters;

  return (
    <Provider store={store}>
      <App {...f7params}>
        <View main url="/" mdSwipeBack={device.ios} iosSwipeBack={device.ios} />
      </App>
    </Provider>
  );
};
export default MyApp;
