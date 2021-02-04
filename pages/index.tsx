import {
  Box,
  Flex,
  Heading,
  Image,
  keyframes,
  useInterval,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Square } from "../components/squares/SquareBox";
import { SquareGrid } from "../components/squares/SquareGrid";
import { animatedColorGradient1 } from "../utils/styles";

const IndexPage = () => {
  const spacing = ["4", "8"];

  const animation = keyframes`
    0% {
      backdrop-filter: blur(15px) saturate(10.8) brightness(1) hue-rotate(0deg);
      background-position:0% 0%
    }
    
    20% {
      backdrop-filter: blur(15px) saturate(12) brightness(0.9) hue-rotate(30deg);
      background-position:87% 100%;
    }

    45% {
      backdrop-filter: blur(15px) saturate(8) brightness(1.5) hue-rotate(170deg);
      background-position:87% 100%
    }

    66% {
      backdrop-filter: blur(15px) saturate(6) brightness(1) hue-rotate(50deg);
      background-position:87% 100%
    }
    
    100% {
      backdrop-filter: blur(15px) saturate(10.8) brightness(1) hue-rotate(360deg);
    }`;

  const [gradientPos1, setGradientPos1] = useState(20.0);
  const [gradientPos2, setGradientPos2] = useState(50.0);
  const [gradientPos3, setGradientPos3] = useState(110.0);
  const [gradientRadius, setGradientRadius] = useState(30.0);
  const [direction, setDirection] = useState(true);
  const [direction2, setDirection2] = useState(true);

  useInterval(() => {
    if (gradientRadius <= 20 && direction === false) {
      setDirection(true);
    }
    if (gradientRadius >= 70 && direction === true) {
      setDirection(false);
    }
    if (gradientPos3 <= 20 && direction2 === false) {
      setDirection2(true);
    }
    if (gradientPos3 >= 110 && direction2 === true) {
      setDirection2(false);
    }
    setGradientPos1(direction ? gradientPos1 + 0.1 : gradientPos1 - 0.1);
    setGradientPos2(direction2 ? gradientPos2 - 0.2 : gradientPos2 + 0.2);
    setGradientPos3(direction2 ? gradientPos3 + 0.3 : gradientPos3 - 0.3);
    setGradientRadius(direction ? gradientRadius + 0.2 : gradientRadius - 0.2);
  }, 150);

  return (
    <Box
      bg={`${animatedColorGradient1(
        gradientPos1,
        gradientPos2,
        gradientPos3,
        gradientRadius
      )}`}
    >
      <Box animation={`${animation} 20s Infinite`} minHeight="100vh">
        <Flex
          p={spacing}
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          // justifyContent={["space-between"]}
          width="100%"
          height="100%"
        >
          <Heading
            fontFamily="raleway"
            as="h1"
            fontSize={["5rem", "5rem", "clamp(1rem, 20vw, 12rem)"]}
            height={["10vh", "10vh", "clamp(1rem, 20vw, 12rem)"]}
            // lineHeight="1"
            textAlign={["center", "center", "left"]}
          >
            Buri
          </Heading>
          <Box
            my={["5vh", "5vh", "0"]}
            mx={["0", "0", "clamp(0.5rem, 5vw, 3rem)"]}
          >
            <Square
              initialPosition={[0, 0]}
              color="midnightblue"
              size={["30vh", "30vh", "clamp(1rem, 20vw, 12rem)"]}
            >
              <Image
                src="/images/avatar.jpg"
                boxSize={"100%"}
                objectFit="cover"
              />
            </Square>
          </Box>
          <SquareGrid size={["30vh", "30vh", "clamp(1rem, 20vw, 12rem)"]}>
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
        </Flex>
      </Box>
    </Box>
  );
};

export default IndexPage;
