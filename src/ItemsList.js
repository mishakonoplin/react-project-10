import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="list-none m-2.5 m-0 p-0">
      {props.items.map((item) => (
        <li key={item.id} className="m-2.5 mb-20">
          <Item info={item} />
          <button
            className="bg-white text-black border-2 border-lightGray py-1 px-5 min-w-[50] text-base rounded cursor-pointer mx-2
            transition-opacity duration-200 ease-out shadow-[1px_1px_1px_rgba(0,0,0,0.2)]
            active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px hover:opacity-80
            disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
