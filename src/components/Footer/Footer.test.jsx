import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '.';

describe('Footer component', () => {

    it('Should render the footer component', () => {

        render(<Footer />);
        const el = document.querySelector('footer');
        expect(el).toBeInTheDocument();

    });

});