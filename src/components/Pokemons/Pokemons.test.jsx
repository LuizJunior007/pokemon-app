import Pokemons from ".";
import { render } from '@testing-library/react';
import { handleGetPokId, handleFirstLetterUpper } from '.';

describe('Pokemons component', () => {

    test('Should render the pokemons list component', () => {

        const pokemons = ['bulbassaur', 'etc'];

        render(<Pokemons pokemons={pokemons} loading={true} />);
        const el = document.querySelector('div');
        expect(el).toBeInTheDocument();

    });

    test('should extract the pokemon id from a url', () => {

        const url = 'https://pokeapi.co/api/v2/pokemon/25/';
        expect(handleGetPokId(url)).toBe("25");

    });

    test('should set first letter the pokemons name to Uppercase', () => {

        const name = 'bulbassaur';
        expect(handleFirstLetterUpper(name)).toBe('Bulbassaur');

    });

});