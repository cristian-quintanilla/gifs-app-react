import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en el Helper getGifs', () => {
	
	test('debe de traer 10 elementos', async () => {
		const gifs = await getGifs('Jujutsu Kaisen');
		expect( gifs.length ).toBe( 10 );
	});

	test('debe de traer un arreglo vacío', async () => {
		const gifs = await getGifs('');
		expect( gifs.length ).toBe( 0 );
	});

})
