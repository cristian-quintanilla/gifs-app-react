import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el Componente <GifGrid />', () => {
	
	const category = 'Jujutsu Kaisen';

	test('debe de mostrar el componente correctamente', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});

		const wrapper = shallow( <GifGrid category={ category } /> );
		expect( wrapper ).toMatchSnapshot();
	});

	test('debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {
		const gifs = [
			{
				id: 1,
				url: 'https://localhost/api/image_1.jpg',
				title: 'Cualquier Cosa'
			}, {
				id: 2,
				url: 'https://localhost/api/image_2.jpg',
				title: 'Cualquier Cosa 2'
			}
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		const wrapper = shallow( <GifGrid category={ category } /> );
		
		expect( wrapper ).toMatchSnapshot();
		expect( wrapper.find('p').exists() ).toBe( false );
		expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
	});

});