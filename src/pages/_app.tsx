import React from 'react';
import type { AppProps } from 'next/app'
import GlobolStyle from '../styles/Configs/global'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Configs/theme';

import './../styles/CSS/LandingPage.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobolStyle />
      </ThemeProvider>
  )
}

export default MyApp
