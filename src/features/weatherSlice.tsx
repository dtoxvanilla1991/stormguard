
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import WeatherModel from '../domain/WeatherModel';
import OpenWeatherApi, { WeatherApi } from '../api';
import config from '../config';
import { TypeLocation } from '../types';
import IStorage from '../device/storage/IStorage';
import LocalStorage from '../device/storage/LocalStorage';

const sliceName = 'weathers';

// The API needs to be injected by a dependency injection mechanism
const weatherApi: WeatherApi = new OpenWeatherApi(config.weatherApiKey);
console.log(config)
// The local storage needs to be injected by a dependency injection mechanism
const localStorage: IStorage = new LocalStorage();

type WeatherSliceState = {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string;
    weathers: WeatherModel[];
    currentWeatherIdx: number;
};


const initialState: WeatherSliceState = {
    loading: 'idle',
    error: '',
    weathers: [],
    currentWeatherIdx: -1
};


export const fetchWeather = createAsyncThunk(
    `${sliceName}/fetchByLocationName`,
    async (location: TypeLocation, thunkAPI) => {
        if (typeof location === 'string') {
            return await weatherApi.byLocationName(location);
        } else {
            const { lon, lat } = location;
            return await weatherApi.byGeolocation(lat, lon);
        }
    }
);

export const loadLocalCurrentWeatherIdx = createAsyncThunk(
    `${sliceName}/loadLocalCurrentWeatherIdx`,
    async () => {
        return await localStorage.loadCurrentIndexAsync();
    }
);

export const loadLocalWeathers = createAsyncThunk(
    `${sliceName}/loadLocalWeathers`,
    async (_, thunkAPI) => {
        thunkAPI.dispatch(loadLocalCurrentWeatherIdx());
        return await localStorage.loadWeathersAsync();
    }
);

const weatherSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: builder => {

        const fetchPending = (state: { loading: string; }) => {
            state.loading = 'pending';
        };

        const fetchFulfilled = (state: any, action: PayloadAction<any>) => {
            state.loading = 'succeeded',
                state.error = '';
            const weather = new WeatherModel(action.payload);
            const index = state.weathers.findIndex((item: WeatherModel) => item.getName() === weather.getName());
            if (index === -1) {
                state.weathers.push(weather);
                state.currentWeatherIdx = state.weathers.length - 1;
            } else if (index > -1) {
                state.currentWeatherIdx = index;
                state.weathers[index] = weather;
            }

            try {
                localStorage.saveWeathersAsync(state.weathers);
                localStorage.saveCurrentIndexAsync(state.currentWeatherIdx);
            } catch (ex) { }
        };

        const fetchFailed = (state: any, action: any) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Something went wrong';
        };

        const loadIndexFulfilled = (state: any, action: PayloadAction<any>) => {
            state.currentWeatherIdx = Number(action.payload);
        };

        const loadWeathersFulfilled = (state: any, action: PayloadAction<any>) => {
            state.weathers = [...action.payload];
        };

        builder.addCase(fetchWeather.pending, fetchPending);
        builder.addCase(fetchWeather.fulfilled, fetchFulfilled);
        builder.addCase(fetchWeather.rejected, fetchFailed);

        builder.addCase(loadLocalCurrentWeatherIdx.fulfilled, loadIndexFulfilled);
        builder.addCase(loadLocalWeathers.fulfilled, loadWeathersFulfilled);
    }
});


export default weatherSlice.reducer;