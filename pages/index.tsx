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
        >
          Music
        </Heading>
        <Text textAlign="justify">
          I have been making music – on and off – for over 15 years. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nisi
          cupiditate assumenda maiores odit inventore quos, corrupti non
          repellat culpa perspiciatis at atque sequi ea molestiae sint! Unde
          aspernatur quaerat aliquid itaque ab architecto nulla ea perspiciatis
          qui sit cumque doloremque earum aliquam dolor, recusandae iusto omnis
          necessitatibus, culpa dolorem enim. Iusto expedita odio ratione libero
          fugit minus numquam cum deserunt dolore, architecto laudantium
          provident repellendus mollitia officiis ipsa voluptates? A laboriosam
          molestiae possimus fugiat eum eius eaque maxime accusamus voluptates
          distinctio perferendis, blanditiis, explicabo cum doloremque nesciunt
          officiis, totam quasi omnis saepe tempore tempora nam dicta. Quod,
          dolores est.
        </Text>
        <Heading
          as="h1"
          fontSize={["2rem", "3rem", "4rem"]}
          transition="font-size 300ms ease"
          pt={["2rem", "2rem"]}
        >
          Painting
        </Heading>
        <Text textAlign="justify">
          Apparently as many others, I have picked up the brush and started
          painting with oil during the lockdown. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Enim excepturi perferendis nisi dolorem
          voluptatem a quidem vero consequatur earum! Inventore excepturi,
          explicabo, quas consequuntur in optio placeat cupiditate iusto
          ratione, possimus earum quo adipisci veritatis sed deserunt corporis
          itaque perspiciatis nostrum dolorem sunt autem illo laudantium
          consequatur! A eligendi, odit architecto omnis obcaecati porro. Nam ab
          atque ratione sapiente voluptates!
        </Text>
      </Box>
    </Box>
  );
};

export default IndexPage;
