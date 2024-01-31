import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {

  return (
    <>
      {items.map(({ name, ...rest }, index) => (
        <Tile name={name} description={rest} key={index} />
      ))}
    </>
  );
};
