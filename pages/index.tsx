import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { colorGradient1, dots } from "../utils/styles";

const IndexPage = () => {
  const imageWidth = "clamp(6rem,calc(5rem + 10vw), 15rem)";

  return (
    <Box minHeight="100vh" bg={`${colorGradient1}`}>
      <Box style={{ backdropFilter: "blur(15px)" }} bg={`${dots}`} p="8">
        <Heading
          as="h1"
          fontSize="5rem"
          mb="4"
          textShadow="10px 10px blue"
          transition="200ms ease-in-out"
          _hover={{ textShadow: "15px 15px blue" }}
        >
          Buri
        </Heading>
        <Flex flexWrap={["wrap", "nowrap"]}>
          <Image
            src="/images/avatar.jpg"
            boxSize={[imageWidth]}
            mb="8"
            mr={["0", "8"]}
            objectFit="cover"
            boxShadow="10px 10px blue"
            transition="200ms ease-in-out"
            _hover={{ boxShadow: "15px 15px blue" }}
          />
          <Box
            p="8"
            bg="custom.lightbg"
            // bg="rgba(100,100,100,0.3)"
            // style={{ backdropFilter: "blur(10px)" }}
            boxShadow="10px 10px blue"
            transition="200ms ease-in-out"
            _hover={{ boxShadow: "15px 15px blue" }}
            width="auto"
          >
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              tenetur, ipsam vitae consequatur ipsum modi voluptates magni nam
              ullam earum error fugiat quidem mollitia. Exercitationem,
              doloremque harum distinctio dignissimos natus architecto quia
              maiores! Nobis mollitia dolores unde nisi sed debitis eum
              laudantium rerum voluptatem, consequatur iure neque iste rem
              itaque ipsum nostrum exercitationem id. Earum ipsam esse veniam
              consectetur unde ipsum et ducimus laborum eius. Facere,
              perspiciatis rerum. Voluptas ea placeat, reiciendis unde vitae
              ipsum, fuga cumque corporis odit atque cupiditate sed eaque
              consequatur quaerat laboriosam praesentium debitis ullam fugiat
              magni quod tenetur neque quos! Eum beatae provident aut distinctio
              dolorum vel dignissimos voluptate quam, deserunt, dicta debitis.
              Assumenda vel quo nisi autem modi accusantium non animi ducimus
              atque. Alias commodi praesentium sed, possimus culpa recusandae
              excepturi fuga eveniet quisquam ipsa exercitationem ducimus
              pariatur, optio mollitia. Adipisci consequatur maiores et earum
              modi perspiciatis sequi ex excepturi! Ab, libero accusamus dicta
              odit ratione, harum commodi itaque aut odio aliquid molestiae,
              voluptate veritatis. In laboriosam minima voluptatum pariatur
              nostrum reprehenderit quas ab error dicta numquam aspernatur
              possimus doloremque, quibusdam a temporibus animi mollitia est
              quis rerum tenetur eveniet molestias alias quaerat maxime.
              Voluptatem facilis iste quia et recusandae ea libero vero optio
              incidunt tempora odit, eos deleniti officia praesentium nostrum
              est odio sint dolore obcaecati quaerat laborum. Rem ipsam ipsa,
              eos necessitatibus similique labore at tempora atque eum omnis
              officia nam architecto voluptates distinctio aperiam velit esse
              quaerat tempore! Error accusantium ratione impedit, deserunt quia
              ipsum! Quis unde eveniet fuga vitae! Corporis consequatur nulla
              officiis voluptatem id modi totam cupiditate, temporibus deleniti
              quas laborum! Vel, reiciendis velit? Libero quo doloribus id quod.
              Culpa aliquam possimus assumenda asperiores explicabo autem
              perferendis provident ipsa, consequuntur praesentium, tenetur
              quasi minima accusamus voluptas laboriosam quo iusto recusandae
              sit animi adipisci consequatur corrupti. Cumque error, nemo in
              provident voluptatem reiciendis dignissimos autem velit vel earum
              obcaecati, porro ipsam itaque! Vitae voluptas possimus dicta sequi
              repellendus suscipit expedita pariatur sapiente recusandae iure
              dolorem asperiores, beatae odit quod consequuntur quasi cupiditate
              esse optio, exercitationem quia amet ipsum voluptatibus. At, fuga.
              Animi iste deleniti facere incidunt aspernatur soluta dicta
              tempore similique? Saepe eius voluptates, tenetur totam provident
              nostrum. Corporis inventore odio dolore molestias ipsum id, cumque
              sequi rem optio suscipit quos quam ducimus quia illum ipsa saepe
              sit consequuntur! Aliquam laudantium in repudiandae nam quae,
              minus, numquam commodi fugit quisquam fugiat obcaecati libero
              optio animi rerum, adipisci accusamus doloribus dolor est itaque
              architecto doloremque ipsam! Quas quod officiis optio possimus
              reiciendis repellat recusandae reprehenderit molestiae facere
              numquam accusantium sunt veritatis facilis labore corporis aliquid
              dolores iste exercitationem, quam atque tempora fugiat odio ea!
              Quod non amet atque vero officia excepturi quis minus dicta minima
              repudiandae, vel accusamus dignissimos debitis aspernatur hic,
              beatae maxime ducimus cum, modi iusto dolore molestias iure.
              Ratione eligendi soluta atque obcaecati quod, fuga earum nam enim
              ipsum corporis. Adipisci vel consequatur molestias earum neque
              dolorem magni eaque voluptates libero cum maxime omnis officiis,
              eos architecto unde eum modi et culpa. Quidem minus iusto deserunt
              facilis reprehenderit?
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default IndexPage;
