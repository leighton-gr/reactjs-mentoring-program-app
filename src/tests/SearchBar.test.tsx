import React from 'react';
import appReducer from '../redux/appSlice';
import { SearchBar } from '../components/SearchBar';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'cross-fetch/polyfill';
import '@testing-library/jest-dom/extend-expect';

fdescribe('SearchBar test', () => {
    const store = configureStore({ reducer: appReducer });
    const mockedUseLocation = jest.fn();

    jest.mock('react-router-dom', () => ({
        ...(jest.requireActual('react-router-dom') as any),
        useLocation: () => mockedUseLocation
    }));

    it('Shows placeholder value!', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <SearchBar/>
                </Provider>
            </BrowserRouter>
        );

        const input = screen.getByTestId('search-input');
        expect(input).toHaveAttribute('type', 'search');
    });


    it('pass valid email to test email input field', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <SearchBar/>
                </Provider>
            </BrowserRouter>
        );


        const input = screen.getByTestId('search-input');
        await userEvent.type(input, 'test@mail.com');

        expect(input).toHaveValue('test@mail.com');
    });
});