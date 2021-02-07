import { Box, Square } from "@chakra-ui/react";
import React from "react";
import { SquareGrid } from "./SquareGrid";

export const ColorGrid = () => {
  return (
    <Box display="grid" placeItems="center" position="relative">
      <SquareGrid size={["31vh", "38vh", "40vh"]}>
        <Square color="midnightblue" />
        <Square color="green" />
        <Square color="yellow" />
        <Square color="darkred" />
        <Square color="deeppink" />
        <Square color="blue" />
        <Square color="white" />
        <Square color="tomato" />
        <Square color="blueviolet" />
      </SquareGrid>
    </Box>
  );
};
