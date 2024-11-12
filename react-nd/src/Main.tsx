import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';
import { MainTheme } from '@/theme/MainTheme';
import './index.css';

const root = document.getElementById('root');

if (root === null) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <ChakraProvider theme={MainTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
