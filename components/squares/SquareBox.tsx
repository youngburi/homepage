import { Box } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

export const Square = ({
  initialPosition = [0, 0],
  color,
  children,
  size,
  borderRadius,
}: {
  initialPosition?: number[];
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
      // left={`-${position[0]}rem`}
      // top={`-${position[1]}rem`}
      height={size || "100%"}
      width={size || "100%"}
      bg={color}
      transition="300ms ease, box-shadow 2s ease, transform 2s ease"
      boxShadow="0 0 black"
      border="clamp(5px, 1vw, 8px) solid white"
      borderRadius={borderRadius}
      _hover={{
        transform: "translate(-2rem,-2rem)",
        boxShadow: "4rem 4rem black",
        transition: "300ms ease",
        cursor: "url('/images/avatar-head-smaller.png') 22.5 31, auto",
      }}
    >
      {children}
    </Box>
  );
};
