import { Box } from "@chakra-ui/react";
import React from "react";
import { SquareBox } from "./SquareBox";
import { SquareGrid } from "./SquareGrid";

export const ColorGrid = () => {
  return (
    <Box display="grid" placeItems="center" position="relative" my="8">
      <SquareGrid size={["31vh", "38vh", "40vh"]}>
        <SquareBox color="midnightblue" />
        <SquareBox color="green" />
        <SquareBox color="yellow" />
        <SquareBox color="darkred" />
        <SquareBox color="deeppink" />
        <SquareBox color="blue" />
        <SquareBox color="pink" />
        <SquareBox color="tomato" />
        <SquareBox color="blueviolet" />
      </SquareGrid>
    </Box>
  );
};
