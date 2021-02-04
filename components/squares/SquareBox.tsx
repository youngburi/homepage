import { Box } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

export const Square = ({
  initialPosition,
  color,
  children,
  size,
  borderRadius,
}: {
  initialPosition: number[];
  color: string;
  children?: ReactNode;
  size?: string[];
  borderRadius?: string | string[];
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [doRise, setDoRise] = useState(true);

  function rise() {
    setPosition([position[0] + 1, position[1] + 1]);
    setDoRise(false);
  }

  function lower() {
    setPosition([position[0] - 1, position[1] - 1]);
    setDoRise(true);
  }

  return (
    <Box
      onMouseOver={doRise ? rise : lower}
      position="relative"
      left={`-${position[0]}rem`}
      top={`-${position[1]}rem`}
      height={size || "100%"}
      width={size || "100%"}
      bg={color}
      transition="box-shadow 300ms ease-in-out, left 300ms ease-in-out, top 300ms ease-in-out"
      boxShadow={`${position[0] * 1.8}rem ${
        position[1] * 1.2
      }rem rgba(0,0,0,1)`}
      // border="5px solid white"
      borderRadius={borderRadius}
    >
      {children}
    </Box>
  );
};
