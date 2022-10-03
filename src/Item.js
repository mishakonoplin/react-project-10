import React, { useState } from "react";
import ItemButton from "./ItemButton";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div>
      <div className="ml-2.5">
        <h2 className="text-3xl">{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="mb-12 flex items-center">
        <ItemButton disabled={total === 0} onChangeQuantity={handleRemoveClick}>-</ItemButton>
        <h3 className="text-base">{total ? total : ""}</h3>
        <ItemButton onChangeQuantity={handleAddClick}>+</ItemButton>
      </div>
    </div>
  );
}
