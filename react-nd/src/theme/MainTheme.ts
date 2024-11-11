import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    100: '#ede9fc',
    200: '#d1c5f7',
    300: '#b7a0f2',
    400: '#9e7ced',
    500: '#795ae7',
    600: '#6047b5',
    700: '#483583',
    800: '#312352',
    900: '#1a1230',
  },
};

const fonts = {
  body: 'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
  heading:
    'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
  mono: 'Menlo, monospace',
};

export const MainTheme = extendTheme({ colors, fonts });
