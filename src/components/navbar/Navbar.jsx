import { Fragment, React, useState } from "react";
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
  const [selectedWallet, setSelectedWallet] = useState(false);

  // To sellect a wallet
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // For selected wallet
  const toggleSelected = () => {
    setSelectedWallet(!selectedWallet);
    // console.log("hiiii");
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWallet(false);
  };

  return (
    <>
      <div className="flex px-3 lg:px-6 items-center h-20 justify-between">
        <div className="flex gap-3 items-center">
          <div>
            <IoMenuOutline size="30" />
          </div>
          <div className="logo">
            <img src={Logo} alt="" width="37px" />
          </div>
        </div>
        <div className="flex gap-1 items-center">
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

      {/* {selectedWallet && (
        <div className="fixed border-2 px-3 top-0 backdrop-blur items-center flex flex-col justify-center w-full h-full right-0 ">
          <div className="px-3 w-full h-fit py-3 flex flex-col justify-center bg-red-400 rounded-lg border ">
            <div className=" flex items-center justify-between border-b py-2">
              <div>
                <h1 className=" text-md">Connect to a wallet</h1>
              </div>
              <p>hello</p>
              <button onClick={closeSelected}>
                <IoClose size="24" />
              </button>
            </div>

            <div className=" flex flex-col gap-2 mt-4"></div>
          </div>
        </div>
      )} */}

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
                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={MetaMask} walletName="Metamask" />
                </div>

                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Rabby} walletName="Rabby Wallet" />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Coinbase} walletName="Metamask" />
                </div>

                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Walletconnect} walletName="Rabby Wallet" />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Trust} walletName="Metamask" />
                </div>

                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Safepal} walletName="Rabby Wallet" />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Math} walletName="Metamask" />
                </div>

                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={TokenP} walletName="Rabby Wallet" />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Bitkeep} walletName="Metamask" />
                </div>

                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Fantom} walletName="Rabby Wallet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedWallet && (
        <div className="fixed border-2 px-3 top-0 backdrop-blur items-center flex flex-col justify-center w-full h-full right-0 ">
          <div className="px-3 w-full h-fit py-3 flex flex-col justify-center bg-white rounded-lg border ">
            <div className=" flex items-center justify-between border-b py-2">
              <div>
                <h1 className=" text-md">MetaMask Modal</h1>
              </div>

              <button onClick={toggleSelected}>
                <IoClose size="24" />
              </button>
            </div>

            <h1>Hi Baby Priscilla!!!</h1>

            <div className=" flex flex-col gap-2 mt-4">
              {/* Add MetaMask content here */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
