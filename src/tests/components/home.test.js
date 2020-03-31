import React, { Component } from 'react';
import { render, fireEvent, cleanup, wait, waitForElement } from '@testing-library/react';
import Home from '../../views/Home';
import userEvent from '@testing-library/user-event';

describe('', () => {
	afterEach(cleanup);
	it('renders the component', () => {
		const { asFragment } = render(<Home />);
		expect(asFragment(<Home />)).toMatchSnapshot();
	});

	it('should show error on submit without providing email and password', async () => {
		const { getByLabelText, getByText, container, debug } = render(<Home />);
		const email = getByLabelText('email');
		const password = getByLabelText('password');
		const submit = getByLabelText('submit');
		const passwordError = getByLabelText('passwordError');
		const emailError = getByLabelText('emailError');

		expect(email.value).toBe('');
		expect(password.value).toBe('');
		await userEvent.click(submit);
		expect(passwordError.textContent).toBe('Please provide a password');
		expect(emailError.textContent).toBe('Requires valid email');
	});

	it('should show error on submit without providing password', async () => {
		const { getByLabelText, getByText, container, debug } = render(<Home />);
		const email = getByLabelText('email');
		const password = getByLabelText('password');
		const submit = getByLabelText('submit');
		const passwordError = getByLabelText('passwordError');
		const emailError = getByLabelText('emailError');

		userEvent.type(email, 'octopusbn@gmail.com');
		expect(email.value).toBe('octopusbn@gmail.com');
		expect(password.value).toBe('');
		await userEvent.click(submit);
		expect(passwordError.textContent).toBe('Please provide a password');

		// console.log(passwordError.textContent);
		// // expect(onSubmit).toHaveBeenCalled()
	});
	it('should show error on submit without providing email and password which are not correct', async () => {
		const { getByLabelText, getAllByText, container, debug } = render(<Home />);
		const email = getByLabelText('email');
		const password = getByLabelText('password');
		const submit = getByLabelText('submit');
		const passwordError = getByLabelText('passwordError');
		const emailError = getByLabelText('emailError');

		userEvent.type(email, 'blaise@gmail.com');
		userEvent.type(password, 'wrong');

		expect(email.value).toBe('blaise@gmail.com');
		expect(password.value).toBe('wrong');
		await fireEvent.click(submit);

		await waitForElement(() => getAllByText('Incorrect username or password combination'));
		expect(emailError.textContent).toBe('Incorrect username or password combination');
		expect(passwordError.textContent).toBe('Incorrect username or password combination');
	});

	it('should submit without providing error', async () => {
		const { getByLabelText, getAllByText, container, debug } = render(<Home />);
		const email = getByLabelText('email');
		const password = getByLabelText('password');
		const submit = getByLabelText('submit');
		const passwordError = getByLabelText('passwordError');
		const emailError = getByLabelText('emailError');

		userEvent.type(email, 'blaise@gmail.com');
		userEvent.type(password, 'password');

		expect(email.value).toBe('blaise@gmail.com');
		expect(password.value).toBe('password');
		await fireEvent.click(submit);

		await wait(() => expect(email.value).toBe(''));
		await wait(() => expect(password.value).toBe(''));
		expect(emailError.textContent).toBe('');
		expect(passwordError.textContent).toBe('');
	});
});
