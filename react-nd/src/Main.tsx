import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App.tsx';
import { MainTheme } from '@/theme/MainTheme';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={MainTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
