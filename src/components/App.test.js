import { render, screen } from '@testing-library/react';
import App from './App';


test('input is empty on page load and has focus', async () => {
  render(<App />);
  const inputElement = await screen.findByRole("searchbox");
  expect(inputElement).toHaveFocus();
  expect(inputElement).toHaveValue('');
});
