import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
	const mockRemove = jest.fn();
	const giftId = 1;
	const props = {gift: {id: giftId}, removeGift: mockRemove};
	const gift = shallow(<Gift {...props} />);

	it('should render properly', () => {
		expect(gift).toMatchSnapshot();
	});

	it('initializes a person and present in state', () => {
		expect(gift.state()).toEqual({person: '', present: ''});
	});

	describe('when typing into the person input', () => {
		const personName = 'Steve';
		beforeEach(() => {
			gift.find('.input-person').simulate('change', {target: {value: personName}});
		});

		it('updates person in state', () => {
			expect(gift.state().person).toEqual(personName);
		});
	});

	describe('when typing into the present input', () => {
		const present = 'Banana';
		beforeEach(() => {
			gift.find('.input-present').simulate('change', {target: {value: present}});
		});

		it('updates present in state', () => {
			expect(gift.state().present).toEqual(present);
		});
	});

	describe('when clicking the remove gift button', () => {
		beforeEach(() => {
			gift.find('.btn-remove').simulate('click');
		});

		it('calls the removeGift callback', () => {
			expect(mockRemove).toHaveBeenCalledWith(giftId);
		});
	});
});
