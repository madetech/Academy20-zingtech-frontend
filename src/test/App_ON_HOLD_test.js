import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from "react-router-dom";

// test utils file
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
}


test('Title exists on homepage', () => {
  renderWithRouter(<App />);
  const title = screen.getAllByText(/HMRC-HR/);
  expect(title[0]).toBeInTheDocument();
});


