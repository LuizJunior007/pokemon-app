import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header component', () => {

    it('should render the header component', () => {

        render(<header />)
        const el = document.querySelector('header');
        expect(el).toBeInTheDocument();

    });

});