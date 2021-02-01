import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const SquareGrid = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display="grid"
      gridGap="1rem"
      gridTemplateColumns="1fr 1fr 1fr"
      gridTemplateRows="1fr 1fr 1fr"
    >
      {children}
    </Box>
  );
};
