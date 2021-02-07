import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useInView } from "react-intersection-observer";

export const ContentContainer = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
  });
  return (
    <Box
      position="relative"
      mx={inView ? ["0rem"] : ["1rem", "1rem", "4rem"]}
      px={inView ? ["2rem", "2rem", "6rem"] : ["1rem", "1rem", "2rem"]}
      pt={inView ? "4rem" : "1rem"}
      mt={inView ? "0rem" : "3rem"}
      transitionDuration="300ms"
      transitionTimingFunction="ease"
      transitionProperty="borderTopRadius, margin-left, margin-top, margin-right, padding-left, padding-top, padding-right"
      bg="custom.lightbg"
      ref={ref}
      borderTopRadius={inView ? "0" : "0.5rem"}
    >
      <Box
        position="relative"
        fontSize={["1.4rem", "1.5rem", "1.6rem"]}
        fontWeight="300"
        textAlign="justify"
      >
        <Text color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          atque quam consectetur voluptatum fugit perferendis non commodi ea nam
          totam nisi neque nostrum natus velit placeat blanditiis autem, harum
          adipisci officia recusandae repudiandae exercitationem magni
          aspernatur cupiditate. Placeat tempore iusto nemo ad hic officia
          tenetur saepe animi ipsam, reprehenderit adipisci?
        </Text>
      </Box>
      <Box
        pb="4"
        fontSize={["1.4rem", "1.5rem", "1.6rem"]}
        fontWeight="700"
        textAlign="justify"
        pt={"2rem"}
      >
        <Text color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus laborum dolores est? Optio, tenetur sit. Ipsa,
          voluptatibus? Ab accusantium, corporis quas ad veniam asperiores id
          explicabo aliquid et, quam tenetur earum blanditiis vitae repellendus
          in deserunt dolores sint nesciunt voluptatum tempora nostrum. Eius
          enim, aspernatur sunt neque deleniti nihil adipisci qui architecto
          tempore dolores error obcaecati veritatis voluptatem nam dicta.
        </Text>
      </Box>
    </Box>
  );
};
