import { render } from '@testing-library/react';
import Layout from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Layout component', () => {

    test('Should render the layout component', () => {

        render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );
        const el = document.querySelector('.main');
        expect(el).toBeInTheDocument();

    });

})