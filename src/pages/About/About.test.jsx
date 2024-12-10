import { render } from '@testing-library/react';
import About from '.';

describe('About component', () => {

    test('should render about component', () => {

        render(<About />);
        const el = document.querySelector('div');
        expect(el).toBeInTheDocument();
        
    });

});