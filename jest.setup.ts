import '@testing-library/jest-dom/extend-expect';
import * as NextRouterMock from 'next-router-mock';

jest.mock('next/router', () => NextRouterMock);
jest.mock('next/dist/client/router', () => NextRouterMock);
