/** @jest-environment jsdom */

import React from 'react';
import { NotFoundPage } from '../components/NotFoundPage';
import { render } from '@testing-library/react';

describe('Page not found test', () => {
    it("should render NotFoundPage", () => {
        render(<NotFoundPage />)
    });
});

