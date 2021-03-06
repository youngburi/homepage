import { Box } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

export const SquareBox = ({
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
      transition="box-shadow 3s ease, transform 3s ease"
      boxShadow="0 0 rgba(0,0,0, 0.8)"
      // border="clamp(5px, 1vw, 8px) solid white"
      borderRadius={borderRadius}
      _hover={{
        transform: "translate(-2rem,-2rem)",
        boxShadow: "4rem 4rem black",
        transition: "box-shadow 300ms ease, transform 300ms ease",
      }}
    >
      {children}
    </Box>
  );
};
