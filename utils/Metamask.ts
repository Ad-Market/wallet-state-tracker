import { metamaskCheck } from 'utils/Web3Connector';
import Web3 from 'web3';

let web3: Web3;

const checkerMetmask = () => {
  if (!metamaskCheck()) {
    alert('메타마스크 설치 필요');
    return false;
  }
  web3 = new Web3((window as any).ethereum);
  return true;
};

const getNetwork = () => {
  // network 체크 후 가져온다.
};

export const getAccount = () => {
  // 1. 연결확인 후 지갑주소를 가져온다.
  // 2. 지갑주소를 가져온다.
};

export const getBalance = () => {
  // 1. 연결 확인
  // 2. 지갑주소를 가져온다.
  // 3. 소유한 이더를 가져온다.
};

export const changeAccountListener = () => {
  // 1. 연결 확인
  // 2. 변경을 추적한다.
  // 3. 변경이 체크된다면 state를 바꾼다.
  // 4. 변경이 되지 않았다면 그대로 둔다.
};
