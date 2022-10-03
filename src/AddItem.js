import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="m-2.5 py-3 px-2.5 rounded border-2 border-lightGray text-base"
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="m-2.5 py-3 px-2.5 rounded border-2 border-lightGray text-base"

        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <input type="submit" className="m-2.5 bg-primary text-white border-0 py-4 px-5 min-w-[150]
         text-base rounded cursor-pointer transition-opacity duration-200 ease-out shadow-[1px_1px_1px_rgba(0,0,0,0.2)]
          hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed
          active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px" value="Добавить" />
      </div>
    </form>
  );
}
