import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { hooks as metaMaskHooks, metaMask } from 'connectors/metaMask';
import { hooks as networkHooks, network } from 'connectors/network';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const connectors: [MetaMask | Network, Web3ReactHooks][] = [
    [metaMask, metaMaskHooks],
    [network, networkHooks],
  ];
  return (
    <>
      <Web3ReactProvider connectors={connectors}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
