interface AppContextType {
  isToggled: boolean;
  gameContract: ethers.Contract | null;
  usdcContract: ethers.Contract | null;
  setToggled: (state: boolean) => void;
}
interface HeaderBtnType {
  avatar?: React.ReactNode;
  title: string | boolean | undefined;
  icon?: React.ReactNode;
  onClick: () => void;
}

interface FightItemType {
  src: string;
  gain: number;
  name: string;
  num: number;
  totalBetAmount: number;
  chainBalance: number;
  getInitialData: () => void;
  getTotalBetData: () => void;
  getGain: () => void;
  getBalance: () => void;
}

type Compete = {
  name: string;
  src: string;
  num: number;
};

type CompeteList = Compete[];
