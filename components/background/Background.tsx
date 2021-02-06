import { Box } from "@chakra-ui/react";
import React from "react";
import { backgroundAnimation, gradientBackground } from "../../utils/styles";

export const Background = () => {
  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      right="0"
      bottom="0"
      bg={gradientBackground}
    >
      <Box
        animation={`${backgroundAnimation} 40s Infinite`}
        position="fixed"
        left="0rem"
        top="0rem"
        right="0rem"
        bottom="-3rem"
      />
    </Box>
  );
};
