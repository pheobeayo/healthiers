import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';
import {darkTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const config = getDefaultConfig({
  appName: 'millionairegame',
  projectId: '8e25a970b249243c7e5ceb04abe3a659',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
});


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider  
        theme={darkTheme({
          accentColor: 'rgb(0,185,229)'
        })}>
    <div>
    
    <App />
    </div>
    </RainbowKitProvider>
    </QueryClientProvider>
    </WagmiProvider>
   
  </React.StrictMode>
);
