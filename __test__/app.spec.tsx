import { render, screen } from '@testing-library/react-native';

import App from '../App';

describe('App', () => {
  it('should be render correctly App', () => {
    render(<App />);

    const app = screen.getByTestId('App');

    expect(app).toBeTruthy();
  });
});
