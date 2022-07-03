import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { hooks, metaMask } from 'connectors/metaMask';
import { Card } from 'components/Card';
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } =
  hooks;

const MetaMaskCard = () => {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();

  const [error, setError] = useState(undefined);

  // attempt to connect eagerly on mount
  // 헤더 부분에 이 코드 활용하면 됨
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask');
    });
  }, []);

  return (
    <Card
      connector={metaMask}
      chainId={chainId}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
    />
  );
};

const Home: NextPage = () => {
  return (
    <>
      <MetaMaskCard />
    </>
  );
};

export default Home;
