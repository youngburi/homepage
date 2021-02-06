import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const SquareGrid = ({
  children,
  size,
}: {
  children: ReactNode;
  size: string[];
}) => {
  return (
    <Box
      display="grid"
      gridGap={["12px", "12px", "16px"]}
      gridTemplateColumns="1fr 1fr 1fr"
      gridTemplateRows="1fr 1fr 1fr"
      width={size}
      height={size}
      transition="300ms ease"
      _hover={{
        cursor: "url('/images/avatar-head-smaller.png') 22.5 31, auto",
      }}
    >
      {children}
    </Box>
  );
};
