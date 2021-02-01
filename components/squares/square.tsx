import { Box } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

export const Square = ({
  initialPosition,
  color,
  children,
  size,
}: {
  initialPosition: number[];
  color: string;
  children?: ReactNode;
  size?: string;
}) => {
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
      height={size || "4rem"}
      width={size || "4rem"}
      bg={color}
      transition="200ms ease-in-out"
      boxShadow={`${position[0] * 1.8}rem ${position[1] * 1.2}rem black`}
      border="5px solid black"
    >
      {children}
    </Box>
  );
};
