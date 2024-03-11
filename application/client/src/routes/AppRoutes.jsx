import { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';

const routes = [
    {
        path: '/',
        Element: <HomePage />,
    },
    {
        path: '/dashboard',
        Element: <DashboardPage />,
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
