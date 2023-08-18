import { Page } from 'framework7-react';
import useLoadWeatherList from '../../hooks/useWeatherList';

import './style.css';
import useLoadingLogic from './useLoadingLogic';

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
            <div className='loading-container'>
                <img src='../../assets/stormguard_logo.svg' height={100} width={100} alt={"stormguard logo"} loading={"lazy"}/>
                <h2>StormGuard</h2>
            </div>
        </Page>
    );
};

export default LoadingScreen;