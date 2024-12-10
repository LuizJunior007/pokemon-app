import Title from ".";
import { render } from '@testing-library/react';

describe('Title component', () => {

    test('should render the received title as props', () => {

        render(<Title txt="Hello world!" />);
        const title = document.querySelector('h1');
        expect(title).toBeInTheDocument();
    });

});