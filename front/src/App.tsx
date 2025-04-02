import './App.css';
import { useEffect } from 'react';
import { mainRoutes } from './routes/route';
import { useLocation, useRoutes } from 'react-router-dom';
import { getPageTitle } from './utils';

//              component: 어플리케이션 컴포넌트                //
function App() {
    //              state: 주소 상태                //
    const location = useLocation();
    const routes = useRoutes(mainRoutes);

    //              effect: 주소에 따른 타이틀 명 이펙트                //
    useEffect(() => {
        document.title = getPageTitle(location.pathname);
    }, [location.pathname]);

    //              render: 어플리케이션 렌더링                //
    return routes;
}

export default App;