import { render } from '@testing-library/react';
import Contact from '.';

describe('Contact component', () => {

    test('should render the contact component', () => {

        render(<Contact />);
        const el = document.querySelector('div');
        expect(el).toBeInTheDocument();

    });

});