import { Box, Heading, HeadingProps, Link, LinkProps } from "@chakra-ui/react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface CustomTextProps {
  children: React.ReactNode;
}

export const H1 = ({
  children,
  ...headingProps
}: CustomTextProps & HeadingProps) => {
  return (
    <Heading
      as="h1"
      fontSize={["2rem", "3rem", "4rem"]}
      transition="font-size 300ms ease"
      pb={["0.3rem", "0.3rem"]}
      // fontWeight="600"
      {...headingProps}
    >
      {children}
    </Heading>
  );
};

export const H2 = ({
  children,
  ...headingProps
}: CustomTextProps & HeadingProps) => {
  return (
    <Heading
      as="h2"
      fontSize={["1.5rem", "1.8rem", "2.2rem"]}
      transition="font-size 300ms ease"
      pt={["0.5rem", "1rem"]}
      pb={["0.3rem", "0.3rem"]}
      fontWeight="500"
      {...headingProps}
    >
      {children}
    </Heading>
  );
};

export const CustomLink = ({
  children,
  isExternal,
  ...linkProps
}: CustomTextProps & LinkProps) => {
  return (
    <Box>
      <Link
        isExternal
        {...linkProps}
        textDecoration="underline"
        _hover={{
          color: "red",
          // fontWeight: 500,
          textDecoration: "underline",
        }}
        // fontFamily="courierPrime"
        fontWeight="300"
      >
        {children}
        {isExternal && (
          <Box as="span" pl="0.5rem">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Box>
        )}
      </Link>
    </Box>
  );
};
