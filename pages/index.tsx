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
        <Flex
          alignItems="center"
          boxShadow="0 4px 6px -1px rgb(150 150 150 / 10%), 0 2px 4px -1px rgb(150 150 150 / 6%)"
          style={{ backdropFilter: "blur(5px) brightness(1)" }}
          bg="linear-gradient(145deg, rgba(255, 154, 204, 0.5), rgba(255, 236, 255, 0.3))"
          borderRadius={["1rem", "1rem", "2rem"]}
          p={["4", "4", "6"]}
          width="fit-content"
        >
          <Heading
            mr={["3", "3", "6"]}
            color="rgba(255,247,250, 0.8)"
            as="h1"
            fontSize={["5rem", "5rem", "clamp(1rem, 20vw, 6rem)"]}
            lineHeight={["3rem", "3rem", "clamp(1rem, 20vw, 6rem)"]}
            mb={["-8px", "-8px", "clamp(-10px, -2vh, -20px)"]}
            transition="300ms ease"
            fontWeight="600"
            // zIndex="5"
            // fontFamily="singleDay"
            // fontWeight="normal"
          >
            Buri
          </Heading>
          <SquareBox
            color="transparent"
            size={["4rem", "4rem", "clamp(1rem, 14vw, 5rem)"]}
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
        </Flex>
        <Box display="grid" placeItems="center" height="100%">
          <Text
            fontFamily="singleDay"
            color="rgba(248,255,250, 0.8)"
            textAlign="center"
            transition="300ms ease"
            fontSize={["2rem", "2.5rem", "clamp(3rem, 6vw, 6rem)"]}
            px={["4", "4", "8"]}
            mb={["10", "8", "6"]}
            // textShadow="4px 6px 10px rgba(255, 255, 255, 0.1)"
            fontWeight={["300"]}
          >
            Software devEloper by day,{" "}
            <Text as="span" display={["none", "inline"]}>
              <br />
            </Text>
            painter and mUsician also by daY
            {/* Software developer by day,{" "}
            <Text as="span" display={["none", "inline"]}>
              <br />
            </Text>
            painter and musician also by day */}
          </Text>
        </Box>
      </Box>
      <Box p={["4", "4", "6"]} display="flex" justifyContent="flex-end">
        <Box
          position="relative"
          bg="linear-gradient(145deg, rgba(255, 154, 204, 0.5), rgba(255, 236, 255, 0.3))"
          borderRadius={["1rem", "1rem", "2rem"]}
          p={["4", "4", "8"]}
          width={["100%", "80%", "60%"]}
          // boxShadow="10px 19px 38px rgba(255, 154, 204, 0.5), -19px -10px 38px rgba(255, 236, 255, 0.3)"
          boxShadow="0 4px 6px -1px rgb(150 150 150 / 10%), 0 2px 4px -1px rgb(150 150 150 / 6%)"
          style={{ backdropFilter: "blur(5px) brightness(0.9)" }}
        >
          <Text fontSize="4rem" fontWeight="600" color="rgba(248,255,250, 0.8)">
            Paintings
          </Text>
          <Text
            fontSize={["1.4rem", "1.5rem", "1.6rem"]}
            // fontWeight="300"
            color="rgba(248,255,250, 1)"
            textAlign={["justify", "justify", "left"]}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            error enim, officiis dolores totam architecto molestiae a veniam
            expedita nemo libero aliquam ullam nostrum dolor laborum magnam
            perferendis? Eius voluptatum omnis nobis. Praesentium omnis quisquam
            necessitatibus doloremque magni laboriosam sequi nisi voluptates
            molestiae assumenda vero id quidem, et explicabo voluptatem?
          </Text>
        </Box>
      </Box>
      <Box p={["4", "4", "6"]} display="flex" justifyContent="flex-start">
        <Box
          bg="linear-gradient(145deg, rgba(161, 225, 255, 0.5), rgba(161, 255, 221, 0.3))"
          position="relative"
          borderRadius={["1rem", "1rem", "2rem"]}
          p={["4", "4", "8"]}
          width={["100%", "85%", "clamp(40rem,80%,60rem)"]}
          // boxShadow="10px 19px 38px rgba(161, 255, 197, 0.5), -19px -10px 38px rgba(255, 236, 255, 0.3)"
          boxShadow="0 4px 6px -1px rgb(150 150 150 / 10%), 0 2px 4px -1px rgb(150 150 150 / 6%)"
          style={{ backdropFilter: "blur(5px) brightness(0.9)" }}
        >
          <Text fontSize="4rem" fontWeight="600" color="rgba(248,250,255, 0.8)">
            Music
          </Text>
          <Text
            fontSize={["1.4rem", "1.5rem", "1.6rem"]}
            // fontWeight="300"
            color="rgba(248,250,255, 1)"
            textAlign={["justify", "justify", "left"]}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            error enim, officiis dolores totam architecto molestiae a veniam
            expedita nemo libero aliquam ullam nostrum dolor laborum magnam
            perferendis? Eius voluptatum omnis nobis. Praesentium omnis quisquam
            necessitatibus doloremque magni laboriosam sequi nisi voluptates
            molestiae assumenda vero id quidem, et explicabo voluptatem?
          </Text>
        </Box>
      </Box>
      <ContentContainer />
    </Box>
  );
};

export default IndexPage;
