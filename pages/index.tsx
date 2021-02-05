import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Background } from "../components/background/Background";
import { Square } from "../components/squares/SquareBox";
import { SquareGrid } from "../components/squares/SquareGrid";

const IndexPage = () => {
  return (
    <Box>
      <Background />
      <Box
        position="relative"
        p={["4", "4", "6"]}
        minHeight="100vh"
        display="grid"
        gridTemplateRows="auto 1fr"
      >
        <Flex alignItems="center">
          <Square
            initialPosition={[0, 0]}
            color="transparent"
            size={["4rem", "4rem", "clamp(1rem, 14vw, 11rem)"]}
            borderRadius={["50%", "50%", "50%"]}
          >
            <Image
              src="/images/avatar.png"
              boxSize={"100%"}
              objectFit="cover"
              borderRadius={["50%", "50%", "50%"]}
              filter="contrast(0.8) brightness(1.1) saturate(1.8)"
              transition="300ms ease"
            />
          </Square>
          <Heading
            ml={["3", "3", "6"]}
            color="white"
            as="h1"
            fontSize={["5rem", "5rem", "clamp(1rem, 20vw, 15rem)"]}
            lineHeight={["3rem", "3rem", "clamp(1rem, 20vw, 12rem)"]}
            mb={["-8px", "-8px", "clamp(-10px, -2vh, -20px)"]}
            transition="300ms ease"
            zIndex="5"
          >
            Buri
          </Heading>
        </Flex>
        <Box display="grid" placeItems="center" height="100%" width="100%">
          <SquareGrid size={["31vh", "42vh", "48vh"]}>
            <Square initialPosition={[0, 0]} color="midnightblue" />
            <Square initialPosition={[0, 0]} color="green" />
            <Square initialPosition={[0, 0]} color="yellow" />
            <Square initialPosition={[0, 0]} color="darkred" />
            <Square initialPosition={[0, 0]} color="deeppink" />
            <Square initialPosition={[0, 0]} color="blue" />
            <Square initialPosition={[0, 0]} color="white" />
            <Square initialPosition={[0, 0]} color="tomato" />
            <Square initialPosition={[0, 0]} color="blueviolet" />
          </SquareGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
