import { expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './state/store';

vi.mock('react-selecto', () => ({ default: () => null }));

test('resizes the grid when the row count changes', () => {
  render(<Provider store={store}><App /></Provider>);

  expect(screen.getByText('Selected 0 tiles')).toBeInTheDocument();
  expect(screen.getAllByText('Slot')).toHaveLength(16);

  fireEvent.change(document.getElementById('numRows'), { target: { value: '2' } });
  expect(screen.getAllByText('Slot')).toHaveLength(8);
});
