import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

export const Square = ({ initialPosition }: { initialPosition: number[] }) => {
  const [position, setPosition] = useState(initialPosition);

  const rise = () => {
    setPosition([position[0] + 1, position[1] + 1]);
  };

  return (
    <Box
      onClick={rise}
      position="relative"
      left={`-${position[0]}rem`}
      top={`-${position[1]}rem`}
      height="6rem"
      width="6rem"
      bg="blue"
      transition="200ms ease-out"
      boxShadow={`${position[0] * 2}rem ${position[1] * 2}rem black`}
    ></Box>
  );
};
