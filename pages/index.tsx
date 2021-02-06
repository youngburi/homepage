import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
            fontFamily="singleDay"
            fontWeight="normal"
          >
            Buri
          </Heading>
        </Flex>
        <Box display="grid" placeItems="center">
          <SquareGrid size={["31vh", "42vh", "44vh"]}>
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
        <Text
          fontFamily="singleDay"
          color="white"
          textAlign="center"
          transform="300ms ease"
          fontSize={["2rem", "2rem", "clamp(1.5rem, 4vw, 4rem)"]}
          // fontWeight={["bold"]}
        >
          {`Software devEloper by day,
          painter and mUsician also by daY
          `}
        </Text>
      </Box>
      <Box
        position="relative"
        p={["4", "4", "6"]}
        fontSize={["1.8rem", "1.9rem", "clamp(2rem, 3vw, 2.5rem)"]}
        textAlign="justify"
      >
        <Text color="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          atque quam consectetur voluptatum fugit perferendis non commodi ea nam
          totam nisi neque nostrum natus velit placeat blanditiis autem, harum
          adipisci officia recusandae repudiandae exercitationem magni
          aspernatur cupiditate. Placeat tempore iusto nemo ad hic officia
          tenetur saepe animi ipsam, reprehenderit adipisci?
        </Text>
      </Box>
    </Box>
  );
};

export default IndexPage;
