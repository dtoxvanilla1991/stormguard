<div id="top"></div>
<div align="right">

[![LinkedIn][linkedin-shield]][linkedin-url]

</div>
<br />
<div align="center">

  <h1 align="center">STORMGUARD</h1>

  <p align="center">
    <br />
    <a href="https://github.com/dtoxvanilla1991/stormguard"><strong>Explore the docs »</strong></a>
  </p> -->
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-app">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The App

StormGuard is your personal weather app that provides you with the most accurate weather forecast for your location, is easy to use and has a beautiful design. StormGuard is specifically designed to be as simple and intuitive as possible. With just one click you receive the weather condition in your status bar at your current location.

Specs: StormGuard is offline-first cross-platform mobile application that can fetch current weather information and forecast for the next five days for any given city using OpenWeatherMap API. The app provides an interactive and intuitive user interface and remembers previous searches for quick future access.

<p align="right">(<a href="#top">back to top</a>)</p>

## Screenshots of the app

<img width="403" alt="image" src="https://github.com/dtoxvanilla1991/stormguard/assets/73205087/7971f145-d004-45eb-be7b-421dce2f8a37">
<img width="323" alt="image" src="https://github.com/dtoxvanilla1991/stormguard/assets/73205087/4fc1cf7a-6136-4eb8-99e3-c81e6cb37549">
<img width="326" alt="image" src="https://github.com/dtoxvanilla1991/stormguard/assets/73205087/1357dc47-f89c-41bb-91a5-a948b6d8061f">
<img width="352" alt="image" src="https://github.com/dtoxvanilla1991/stormguard/assets/73205087/5fd2379c-9be9-4ae6-9e98-9d1ebe04bed6">


### Built With

Frameworks/libraries/languages used:

- [React.js](https://react.dev/)
- [Node.js](https://nodejs.org/en/)
- [Framework7](https://framework7.io/react)
- [Capacitor](https://capacitorjs.com/)
- [Redux store and toolkit](https://redux.js.org/); (meh, could have used Context API too)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Vite](https://vitejs.dev/)
- [Prettier](https://prettier.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- screenshots will go here once I finish the app -->

## Getting Started

To get a local copy up and running follow these simple steps after downloading the files from the Github.

### Prerequisites

To run the app, install it locally using npm in your terminal:

```
npm i
```

or

```
yarn
```

## NPM Scripts

- 🔥 `start` - run development server
- 🔧 `dev` - run development server
- 🔧 `build` - build web app for production
- 📱 `build-capacitor-ios` - build app and copy it to iOS capacitor project
- 📱 `build-capacitor-android` - build app and copy it to Android capacitor project

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## Capacitor

This project created with Capacitor support. And first thing required before start is to add capacitor platforms, run in terminal:

```
npx cap add android && npx cap add ios
```

## APIs

Rename `environment` file to `.env` , and set the API key for the OpenWeatherMap API (you will need to register and sub).

/data/2.5/weather - To fetch the current weather

/data/3.0/onecall - To fetch the daily forecast

## Implemented Features

- City Input
- Current Weather
- Weather Forecast
- Geolocation handling
- Data Storage
- A11y features (semantic HTML structure, ARIA attributes, ATL tags etc.)
- Various optimizations (lazy loading, code splitting, tree shaking, etc.)
- Offline First

## Ideas for Future Features

- Add Storybook for better component development;
- CI/CD using Github Actions;
- Add unit tests using Jest, including edge cases;
- Add e2e tests using Cypress and Argos Screenshots;
- Add more graceful and "smart" error handling, providing the user with more information about the error and the development team with more information about the error;
- Protect API keys with proxy endpoints, implemented between the OpenWeatherMap API and the app;
- Move assets to Cloudinary (that hosts with on AWS and optimizes them for all devices) for maximum performance;
- Using dependency injection for better code scalability & testability;
- Logging & monitoring using FullStory;
- Crash/Error reports using Sentry;

Check out [official Capacitor documentation](https://capacitorjs.com) for more examples and usage examples.

## Contact

Project Link: [StormGuard Weather App](https://github.com/dtoxvanilla1991/stormguard)

<p align="right">(<a href="#top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/yuri-avdijevski
