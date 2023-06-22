import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { ExtendedMovieDetail } from './components/ExtendedMovieDetail/ExtendedMovieDetail';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/search" />
    },
    {
        path: "/search",
        element: <App />,
    },
    {
        path: "/search/:search",
        element: <App />,
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/search/:id',
        element: <App />
    }
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);