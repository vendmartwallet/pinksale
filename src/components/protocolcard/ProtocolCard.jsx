import React from "react";
import PinkSale from "../../assets/pinkmoon.png";

const ProtocolCard = () => {
  const Card = (props) => {
    return (
      <>
        <div className="price py-14 flex flex-col items-center rounded-2xl w-[70%] mx-auto">
          <div className=" h-20 w-20">
            <img src={props.img} alt="" />
          </div>
          <div className=" text-3xl font-semibold pt-2 leading-[40px] ">
            {props.price}
          </div>
          <div className=" text-md w-[80%] text-center pt-2 font-light">
            {props.description}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" grid grid-cols-1 gap-7 pt-14">
        <Card
          img={PinkSale}
          price="PinkMoon

          "
          description="The best launchpad for professional teams

          "
        />
        <Card
          img={PinkSale}
          price="PinkSale"
          description="Launch a token sale with a few clicks."
        />
        <Card
          img={PinkSale}
          price="PinkSwap
          "
          description="Swap tokens and farming $PinkS."
        />
        <Card
          img={PinkSale}
          price="Launchpad"
          description="Use the token you mint to create a launchpad with just a few clicks"
        />
        <Card
          img={PinkSale}
          price="PinkLock
          "
          description="The first meme token on PinkMoon."
        />
        <Card
          img={PinkSale}
          price="PinkWallet
          "
          description="Crypto wallet, buy, store, exchange & earn."
        />
      </div>
    </>
  );
};

export default ProtocolCard;
