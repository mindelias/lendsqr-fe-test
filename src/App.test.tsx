import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoute from './routing';
import routes from './routing/routes';

jest.mock('../src/screens/login/Login', () => () => <div>Login Page</div>);
jest.mock('../src/screens/forgot-password/ForgotPassword', () => () => <div>Forgot Password Page</div>);
jest.mock('../src/hooks/useAuth', () => jest.fn());
jest.mock('../src/layouts/ProtectedLayout', () => ({ children } : { children: React.ReactNode }) => <div>Protected Layout {children}</div>);

// Mocking a sample route from the routes array
jest.mock('../src/screens/someProtectedPage', () => () => <div>Protected Page</div>);

routes.push({
  id: 1,
  path: '/protected',
  element: <div>Protected Page</div>
});

test('renders login page on /login route', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <AppRoute />
    </MemoryRouter>
  );
  const loginElement = screen.getByText(/login page/i);
  expect(loginElement).toBeInTheDocument();
});

test('renders forgot password page on /forgot-password route', () => {
  render(
    <MemoryRouter initialEntries={['/forgot-password']}>
      <AppRoute />
    </MemoryRouter>
  );
  const forgotPasswordElement = screen.getByText(/forgot password page/i);
  expect(forgotPasswordElement).toBeInTheDocument();
});

test('renders protected route inside protected layout', () => {
  render(
    <MemoryRouter initialEntries={['/protected']}>
      <AppRoute />
    </MemoryRouter>
  );
  const protectedElement = screen.getByText(/protected page/i);
  const layoutElement = screen.getByText(/protected layout/i);
  expect(protectedElement).toBeInTheDocument();
  expect(layoutElement).toBeInTheDocument();
});

test('redirects to login page for unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/unknown']}>
      <AppRoute />
    </MemoryRouter>
  );
  const loginElement = screen.getByText(/login page/i);
  expect(loginElement).toBeInTheDocument();
});
