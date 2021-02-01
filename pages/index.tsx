import {
  Box,
  Flex,
  Heading,
  Image,
  keyframes,
  useInterval,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import React, { useState } from "react";
import { animatedColorGradient1 } from "../utils/styles";

const IndexPage = () => {
  const spacing = ["4", "8"];
  const boxShadow = ["8px 8px blue"];
  const boxShadowHover = ["16px 16px blue"];

  const animation = keyframes`
    0% {
      backdrop-filter: blur(15px) saturate(10.8) brightness(1) hue-rotate(0deg);
      background-position:0% 0%
    }
    
    20% {
      backdrop-filter: blur(15px) saturate(12) brightness(0.8) hue-rotate(30deg);
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
      minHeight="100vh"
      bg={`${animatedColorGradient1(
        gradientPos1,
        gradientPos2,
        gradientPos3,
        gradientRadius
      )}`}
    >
      <Box
        css={css`
          animation: ${animation} 20s Infinite;
          min-height: 100vh;
        `}
      >
        <Box p={spacing}>
          <Heading
            fontFamily="raleway"
            as="h1"
            fontSize="5rem"
            my={["6", "8"]}
            lineHeight="1"
            textAlign={["center", "center"]}
          >
            Buri
          </Heading>
          <Flex
            flexWrap={["wrap", "wrap", "nowrap"]}
            justifyContent={["center", "center"]}
          >
            <Image
              src="/images/avatar.jpg"
              boxSize={["clamp(10rem,calc(5rem + 10vw), 15rem)"]}
              // mb={spacing}
              // mr={spacing}
              objectFit="cover"
              boxShadow={boxShadow}
              transition="box-shadow 200ms ease-in-out, transform 200ms ease-in-out"
              _hover={{
                boxShadow: boxShadowHover,
                transform: [
                  // "translate(-2px, -2px)",
                  "translate(-4px, -4px)",
                ],
              }}
              border="5px solid black"
            />
            {/* <Box
              p={spacing}
              bg="white"
              // bg="rgba(240,240,240,0.8)"
              style={{ backdropFilter: "blur(10px)" }}
              boxShadow={boxShadow}
              transition="200ms ease-in-out"
              _hover={{ boxShadow: boxShadowHover }}
              width="auto"
              border="5px solid black"
            >
              <Text textAlign="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti tenetur, ipsam vitae consequatur ipsum modi voluptates
                magni nam ullam earum error fugiat quidem mollitia.
                Exercitationem, doloremque harum distinctio dignissimos natus
                architecto quia maiores! Nobis mollitia dolores unde nisi sed
                debitis eum laudantium rerum voluptatem, consequatur iure neque
                iste rem itaque ipsum nostrum exercitationem id. Earum ipsam
                esse veniam consectetur unde ipsum et ducimus laborum eius.
                Facere, perspiciatis rerum. Voluptas ea placeat, reiciendis unde
                vitae ipsum, fuga cumque corporis odit atque cupiditate sed
                eaque consequatur quaerat laboriosam praesentium debitis ullam
                fugiat magni quod tenetur neque quos! Eum beatae provident aut
                distinctio dolorum vel dignissimos voluptate quam, deserunt,
                dicta debitis. Assumenda vel quo nisi autem modi accusantium non
                animi ducimus atque. Alias commodi praesentium sed, possimus
                culpa recusandae excepturi fuga eveniet quisquam ipsa
                exercitationem ducimus pariatur, optio mollitia. Adipisci
                consequatur maiores et earum modi perspiciatis sequi ex
                excepturi! Ab, libero accusamus dicta odit ratione, harum
                commodi itaque aut odio aliquid molestiae, voluptate veritatis.
                In laboriosam minima voluptatum pariatur nostrum reprehenderit
                quas ab error dicta numquam aspernatur possimus doloremque,
                quibusdam a temporibus animi mollitia est quis rerum tenetur
                eveniet molestias alias quaerat maxime. Voluptatem facilis iste
                quia et recusandae ea libero vero optio incidunt tempora odit,
                eos deleniti officia praesentium nostrum est odio sint dolore
                obcaecati quaerat laborum. Rem ipsam ipsa, eos necessitatibus
                similique labore at tempora atque eum omnis officia nam
                architecto voluptates distinctio aperiam velit esse quaerat
                tempore! Error accusantium ratione impedit, deserunt quia ipsum!
                Quis unde eveniet fuga vitae! Corporis consequatur nulla
                officiis voluptatem id modi totam cupiditate, temporibus
                deleniti quas laborum! Vel, reiciendis velit? Libero quo
                doloribus id quod. Culpa aliquam possimus assumenda asperiores
                explicabo autem perferendis provident ipsa, consequuntur
                praesentium, tenetur quasi minima accusamus voluptas laboriosam
                quo iusto recusandae sit animi adipisci consequatur corrupti.
                Cumque error, nemo in provident voluptatem reiciendis
                dignissimos autem velit vel earum obcaecati, porro ipsam itaque!
                Vitae voluptas possimus dicta sequi repellendus suscipit
                expedita pariatur sapiente recusandae iure dolorem asperiores,
                beatae odit quod consequuntur quasi cupiditate esse optio,
                exercitationem quia amet ipsum voluptatibus. At, fuga. Animi
                iste deleniti facere incidunt aspernatur soluta dicta tempore
                similique? Saepe eius voluptates, tenetur totam provident
                nostrum. Corporis inventore odio dolore molestias ipsum id,
                cumque sequi rem optio suscipit quos quam ducimus quia illum
                ipsa saepe sit consequuntur! Aliquam laudantium in repudiandae
                nam quae, minus, numquam commodi fugit quisquam fugiat obcaecati
                libero optio animi rerum, adipisci accusamus doloribus dolor est
                itaque architecto doloremque ipsam! Quas quod officiis optio
                possimus reiciendis repellat recusandae reprehenderit molestiae
                facere numquam accusantium sunt veritatis facilis labore
                corporis aliquid dolores iste exercitationem, quam atque tempora
                fugiat odio ea! Quod non amet atque vero officia excepturi quis
                minus dicta minima repudiandae, vel accusamus dignissimos
                debitis aspernatur hic, beatae maxime ducimus cum, modi iusto
                dolore molestias iure. Ratione eligendi soluta atque obcaecati
                quod, fuga earum nam enim ipsum corporis. Adipisci vel
                consequatur molestias earum neque dolorem magni eaque voluptates
                libero cum maxime omnis officiis, eos architecto unde eum modi
                et culpa. Quidem minus iusto deserunt facilis reprehenderit?
              </Text>
            </Box> */}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
