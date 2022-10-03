import React from "react";


export default function ItemButton(props) {
    

  return (
    <button className="bg-white text-black border-2 border-lightGray py-1 px-5 min-w-[50] text-base rounded cursor-pointer mx-2
    transition-opacity duration-200 ease-out shadow-[1px_1px_1px_rgba(0,0,0,0.2)]
    active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px hover:opacity-80
    disabled:opacity-40 disabled:cursor-not-allowed" onClick={props.onChangeQuantity} disabled={props.disabled}>{props.children}</button>
  );
}
