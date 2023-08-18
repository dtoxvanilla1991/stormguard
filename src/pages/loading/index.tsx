import { Page } from 'framework7-react';
import useLoadWeatherList from '../../hooks/useWeatherList';

import './style.scss';
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
            <div className='splash-container'>
                <img src='../../assets/stormguard_logo.svg' alt={"stormguard logo"}/>
                <h1>StormGuard</h1>
            </div>
        </Page>
    );
};

export default LoadingScreen;