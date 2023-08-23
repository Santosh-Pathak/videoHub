import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';  // Remove the { ReactDOM } import
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';

const root = document.getElementById('root'); // No need for ReactDOM.createRoot

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>,
  root // Use the root variable here
);
