import { render } from '@testing-library/react';
import Home from '.';

describe('Home component', () => {

    test('should render home component', () => {

        render(<Home />);
        const el = document.querySelector('div');
        expect(el).toBeInTheDocument();

    });

});