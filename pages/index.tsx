import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { CustomLink, H1, H2 } from "../components/dom-elemens/typography";
import { backgroundAnimation, gradientBackground } from "../utils/styles";

const IndexPage = () => {
  return (
    <Box>
      <Head>
        <title>buri.fyi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
      </Head>
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
        <Text
          // textAlign="justify"
          fontStyle="italic"
        >
          Hi. Most people call me Buri, and this is a summary of the things i
          do, as an fyi.
        </Text>
        {/* <Text
          // float="right"
          // as="span"
          color="red"
          fontWeight="300"
        >
          [this page is work in progress]
        </Text> */}
        <H1 pt={["2rem", "2rem"]}>Music</H1>
        <Text textAlign="justify">
          I have been producing music – on and off – for over 15 years. More
          info coming.
        </Text>
        <H2>Current Outlets</H2>
        <CustomLink
          href="https://open.spotify.com/artist/2RMU7Lt7hloDPL3mNcLg0V?si=rmg6lUddRVSNoaB61mrDrw"
          isExternal
        >
          Spotify
        </CustomLink>
        <CustomLink href="https://soundcloud.com/burichakalaka" isExternal>
          Soundcloud
        </CustomLink>
        <H2>Past Projects</H2>
        <CustomLink href="https://soundcloud.com/gutsch" isExternal>
          Soundcloud 2
        </CustomLink>
        <CustomLink href="https://soundcloud.com/mockinsense" isExternal>
          Soundcloud 3
        </CustomLink>
        <CustomLink href="https://soundcloud.com/loveschool" isExternal>
          Soundcloud 4
        </CustomLink>
        <CustomLink href="https://soundcloud.com/ibra" isExternal>
          Soundcloud 5
        </CustomLink>
        <H1 pt={["2rem", "2rem"]}>Painting</H1>
        <Text textAlign="justify">
          As many others, I have picked up the brush and started painting with
          oil during the lockdown. More info coming.
        </Text>
        <H1 pt={["2rem", "2rem"]}>Software</H1>
        <Text textAlign="justify">
          Fullstack web developer by trade, with main interests laying in
          frontend design and UX. More info coming.
        </Text>
      </Box>
    </Box>
  );
};

export default IndexPage;
