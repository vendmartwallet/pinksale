import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import ButtonPrimaryprops from "../../components/buttonPrimary/ButtonPrimaryprops";
import ButtonSecprops from "../../components/buttonSec/ButtonSecprops";
import Logo from "../../assets/pinkswaplogo.png";
import Tradeview from "../../assets/tradeview.svg";
import Binance from "../../assets/binancelogo.png";

const Navbar = () => {
  return (
    <>
      <div className=" flex px-5 lg:px-6 items-center h-20 justify-between">
        <div className=" flex gap-3 items-center">
          <div>
            <IoMenuOutline size="30" />
          </div>
          <div className="logo">
            <img src={Logo} alt="" width="37px" />
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          <ButtonSecprops title="dexview.com" img={Tradeview} />
          <div className=" hidden lg:block">
            {" "}
            <ButtonSecprops title="BSC MAINNET" img={Tradeview} />
          </div>

          <div className=" h-8 w-8 rounded-full bg-black p-2
          ">
            <img src={Binance} alt="" />
          </div>

          <ButtonPrimaryprops title="Connect" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
