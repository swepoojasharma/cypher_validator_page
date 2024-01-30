import { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const routes = [
    {
        path: '/',
        Element: <HomePage />,
    },
    {
        path: '*',
        Element: () => <Navigate to="/" />,
    },
];

function Router() {
    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.Element} />
            ))}
        </Routes>
    );
}

const AppRoutes = memo(Router);
export default AppRoutes;
