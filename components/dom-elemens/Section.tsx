import { Box } from "@chakra-ui/react";
import React from "react";

interface MainSectionProps {
  children: React.ReactNode;
}

export const MainSection = ({ children }: MainSectionProps) => {
  return (
    <Box mx={["0rem", "4rem"]} mt={["0rem", "2rem"]} mb={["0rem", "1rem"]}>
      {children}
    </Box>
  );
};
