import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el Componente <GifGridItem />', () => {

	const title   = 'Soy el título';
	const url     = 'https://localhost/images/image_1.jpg';
	const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

	test('debe de mostrar el Componente correctamente.', () => {
		expect( wrapper ).toMatchSnapshot();
	});

	test('debe de tener un párrafo con el título', () => {
		const p = wrapper.find('p').text().trim();
		expect( p ).toBe( title );
	});

	test('debe de tener la imagen con alt y src', () => {
		const img = wrapper.find('img');
		// console.log(img.prop('src'));
		// console.log(img.props().alt);

		expect( img.prop('src') ).toBe( url );
		expect( img.props().alt ).toBe( title );
	});

	test('debe de tener un div con la clase animate__fadeIn', () => {
		const div = wrapper.find('div');
		const className = div.prop('className');

		// expect( div.hasClass('animate__fadeIn') ).toBe( true );
		expect( className.includes('animate__fadeIn') ).toBe( true );
	});

});