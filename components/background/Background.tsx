import { Box } from "@chakra-ui/react";
import React from "react";
import { backgroundAnimation, gradientBackground } from "../../utils/styles";

export const Background = () => {
  return (
    <Box
      position="fixed"
      // height="120vh"
      // width="120vw"
      left="0"
      top="0"
      right="0"
      bottom={["-10rem", "0"]}
      bg={gradientBackground}
    >
      <Box
        animation={`${backgroundAnimation} 40s Infinite`}
        position="fixed"
        // height="120vh"
        // width="120vw"
        left="0rem"
        top="0rem"
        right="0rem"
        bottom={["-10rem", "0"]}
      />
    </Box>
  );
};
