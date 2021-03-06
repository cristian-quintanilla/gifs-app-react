import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el Componente <AddCategory />', () => {

	const setCategories = jest.fn();
	let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
	});

	test('debe de mostrar el Componente correctamente.', () => {
		expect( wrapper ).toMatchSnapshot();
	});

	test('debe de cambiar el input', () => {
		const input = wrapper.find('input');
		const value = 'Hello World';

		input.simulate('change', {
			target: {
				value
			}
		});

		expect( wrapper.find('p').text().trim() ).toBe( value );

	});

	test('NO debe de postear la información con el submit', () => {
		wrapper.find('form').simulate('submit', {
			preventDefault(){}
		});

		expect( setCategories ).not.toHaveBeenCalled();
	});

	test('debe de llamar el setCategories y limpiar el input', () => {
		const input = wrapper.find('input');
		const value = 'Hello World';

		// 1. Simular el onChange en el input
		input.simulate('change', { target: { value } });

		// 2. Simular el submit
		wrapper.find('form').simulate('submit', {	preventDefault(){} });

		// 3. setCategories se debe de haber llamado
		expect( setCategories ).toHaveBeenCalled();
		// expect( setCategories ).toHaveBeenCalledTimes(2); -> Llamada dos veces
		// Esperar que se haya llamado con cualquier tipo de función
		expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

		// 4. El valor del input debe de ser: ''
		expect( input.prop('value') ).toBe('');
	});

});