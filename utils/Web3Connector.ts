import Web3 from 'web3';
import MetaMaskOnboarding from '@metamask/onboarding';

let web3: Web3;
const onboarding = new MetaMaskOnboarding();
/**
 * web3에 대한 체크 실시 후 web3를 주입하거나 메타마스크 설치로 안내한다.
 */

const checkWeb3 = () => {
  // ethereum 에 대한 체크만
  try {
    if ((window as any).ethereum && (window as any).ethereum.isConnected()) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};

const setWeb3 = () => {
  // web3 체크만
  if (!checkWeb3()) return;
  web3 = new Web3((window as any).ethereum);
  return;
};

export const metamaskCheck = () => {
  /**
   * web3 or 메타마스크 체크 후
   */
  setWeb3();
  if (!web3 || !MetaMaskOnboarding.isMetaMaskInstalled()) {
    onboarding.startOnboarding();
    const checker = setInterval(() => {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        onboarding.stopOnboarding();
        clearInterval(checker);
        return true;
      }
    }, 2000);
  }
  return true;
};
