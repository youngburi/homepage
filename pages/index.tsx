import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { MainSection } from "../components/dom-elemens/Section";
import { CustomLink, H1, H2 } from "../components/dom-elemens/Typographyy";
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
              color="#eee"
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
          // textAlign="center"
          fontStyle="italic"
        >
          I'm Buri and this is a summary of the things I do, FYI.
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
        <MainSection>
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
        </MainSection>
        <H1 pt={["2rem", "2rem"]}>Painting</H1>
        <MainSection>
          <Text textAlign="justify">
            As many others, I have picked up the brush and started painting with
            oil during the lockdown. More info coming.
          </Text>
        </MainSection>
        <H1 pt={["2rem", "2rem"]}>Software</H1>
        <MainSection>
          <Text textAlign="justify">
            Fullstack web developer by trade, with main interests in frontend
            design and UX. More info coming.
          </Text>
        </MainSection>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          // borderTopRadius="0.5rem"
          bgColor="black"
          width="clamp(12rem, 50%, 30rem)"
          mt="1rem"
          height="5rem"
          mx="2rem"
        ></Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
