import React from "react";

interface Items {
  sourse: string;
  title: string;
}

interface ItemsProps {
  items: Items[];
}
export const Legendari = (props: ItemsProps) => {
  return (
    <div className="flex flex-col px-10px sm:flex-row sm:justify-center md:flex-row mg:justify-center lg:flex-row lg:justify-center ">
      {props.items.map((item) => (
        <img
          className=" py-2 sm:px-4 md:px-8 lg:px-16 bg-auto  bg-center"
          src={`${item.sourse}`}
          alt="Helm"
        />
      ))}
    </div>
  );
};
