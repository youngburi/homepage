import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Background } from "../components/background/Background";
import { ContentContainer } from "../components/ContentContainer";
import { SquareBox } from "../components/squares/SquareBox";

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
          <SquareBox
            color="transparent"
            size={["4rem", "4rem", "clamp(1rem, 14vw, 6rem)"]}
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
          </SquareBox>
          <Heading
            ml={["3", "3", "6"]}
            color="white"
            as="h1"
            fontSize={["5rem", "5rem", "clamp(1rem, 20vw, 6rem)"]}
            lineHeight={["3rem", "3rem", "clamp(1rem, 20vw, 6rem)"]}
            mb={["-8px", "-8px", "clamp(-10px, -2vh, -20px)"]}
            transition="300ms ease"
            zIndex="5"
            // fontFamily="singleDay"
            // fontWeight="normal"
          >
            Buri
          </Heading>
        </Flex>
        <Box display="grid" placeItems="center" height="100%">
          <Text
            fontFamily="singleDay"
            color="white"
            textAlign="center"
            transition="300ms ease"
            fontSize={["2rem", "2.5rem", "clamp(3rem, 6vw, 6rem)"]}
            px={["4", "4", "8"]}
            mb={["10", "8", "6"]}
            textShadow="4px 6px 8px rgba(100, 100, 100, 0.3)"
            // fontWeight={["bold"]}
          >
            Software devEloper by day,{" "}
            <Text as="span" display={["none", "inline"]}>
              <br />
            </Text>
            painter and mUsician also by daY
          </Text>
        </Box>
      </Box>
      <ContentContainer />
    </Box>
  );
};

export default IndexPage;
