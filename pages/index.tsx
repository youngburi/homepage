import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { backgroundAnimation, gradientBackground } from "../utils/styles";

const IndexPage = () => {
  return (
    <Box>
      <Box height="100vh" width="100vw" p={["2rem", "2rem"]}>
        <Box bg={gradientBackground} height="100%" width="100%">
          <Box
            animation={`${backgroundAnimation} 40s Infinite`}
            height="100%"
            width="100%"
            display="grid"
            placeItems="center"
            p={["1rem"]}
          >
            <Text
              color="white"
              transition="300ms ease"
              fontSize={["clamp(1rem, 3vw, 2rem)"]}
              textAlign="center"
            >
              Software developer by day,{" "}
              <Text as="span" display={["inline", "inline", "inline", "none"]}>
                <br />
              </Text>{" "}
              painter and musician also by day.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
