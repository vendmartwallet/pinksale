import { React, useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import ButtonPrimaryprops from "../../components/buttonPrimary/ButtonPrimaryprops";
import ButtonSecprops from "../../components/buttonSec/ButtonSecprops";
import Logo from "../../assets/pinkswaplogo.png";
import Tradeview from "../../assets/tradeview.svg";
import Binance from "../../assets/binancelogo.png";
import Wallets from "../wallets/Wallets";
import MetaMask from "../../assets/metamask.png";
import Trust from "../../assets/trust.png";
import Coinbase from "../../assets/coinbase.png";
import Bitkeep from "../../assets/bitkeep.png";
import Walletconnect from "../../assets/walletcon.svg";
import Fantom from "../../assets/fantom.png";
import Math from "../../assets/mathwallet.png";
import TokenP from "../../assets/tokenpocket.png";
import Safepal from "../../assets/safepal.jpg";
import Rabby from "../../assets/rabby.svg";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex px-5 lg:px-6 items-center h-20 justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <IoMenuOutline size="30" />
          </div>
          <div className="logo">
            <img src={Logo} alt="" width="37px" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <ButtonSecprops title="dexview.com" img={Tradeview} />
          <div className="hidden lg:block">
            <ButtonSecprops title="BSC MAINNET" img={Tradeview} />
          </div>

          <div className="h-8 w-8 rounded-full bg-black p-2">
            <img src={Binance} alt="" />
          </div>

          <div onClick={toggleModal}>
            <ButtonPrimaryprops title="Connect" />
          </div>
        </div>
      </div>

      {showModal && (
          <div className="fixed border-2 px-3 top-0 backdrop-blur items-center flex flex-col justify-center w-full h-full right-0 ">
            <div className="px-3 w-full h-fit py-3 flex flex-col justify-center bg-white rounded-lg border ">
              <div className=" flex items-center justify-between border-b py-2">
                <div>
                  <h1 className=" text-md">Connect to a wallet</h1>
                </div>

                <button onClick={closeModal}>
                  <IoClose size="24" />
                </button>
              </div>

              <div className=" flex flex-col gap-2 mt-4">
                <div className=" flex items-center gap-2">
                  <Wallets img={MetaMask} walletName="Metamask" />
                  <Wallets img={Rabby} walletName="Rabby Wallet" />
                </div>
                <div className=" flex items-center gap-2">
                  <Wallets img={Coinbase} walletName="Coinbase Wallet" />
                  <Wallets img={Walletconnect} walletName="Walletconnect" />
                </div>
                <div className=" flex items-center gap-2">
                  <Wallets img={Trust} walletName="TrustWallet" />
                  <Wallets img={Safepal} walletName="Safepal" />
                </div>
                <div className=" flex items-center gap-2">
                  <Wallets img={Math} walletName="Math Wallet" />
                  <Wallets img={TokenP} walletName="TokenPocket" />
                </div>
                <div className=" flex items-center gap-2">
                  <Wallets img={Bitkeep} walletName="Bitkeep" />
                  <Wallets img={Fantom} walletName="Fantom" />
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Navbar;
