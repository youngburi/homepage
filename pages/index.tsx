import { Box, Heading, Text } from "@chakra-ui/react";
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
              transition="font-size 300ms ease"
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
      <Box px={["2rem", "2rem"]} pb={["2rem", "2rem"]}>
        <Heading
          as="h1"
          fontSize={["2rem", "3rem", "4rem"]}
          transition="font-size 300ms ease"
          pb={["0.3rem", "0.3rem"]}
          // fontWeight="600"
        >
          Music
        </Heading>
        <Text textAlign="justify">
          I have been producing music – on and off – for over 15 years. More
          info coming.
        </Text>
        <Heading
          as="h1"
          fontSize={["2rem", "3rem", "4rem"]}
          transition="font-size 300ms ease"
          pt={["2rem", "2rem"]}
          pb={["0.3rem", "0.3rem"]}
          // fontWeight="600"
        >
          Painting
        </Heading>
        <Text textAlign="justify">
          As many others, I have picked up the brush and started painting with
          oil during the lockdown. More info coming.
        </Text>
      </Box>
    </Box>
  );
};

export default IndexPage;
