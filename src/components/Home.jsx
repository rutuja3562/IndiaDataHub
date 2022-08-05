import React from "react";
import "../App.css";
import { Container, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import img1 from "../Img/1.png";
import img2 from "../Img/2.jpg";
import img3 from "../Img/3.png";
import img4 from "../Img/4.jpg";

import { ContainerRight } from "./ContainerRight";
import { ContainerLeft } from "./ContainerLeft";
const Div = styled.header`
  .text1 {
  }
`;
export const Home = () => {
  return (
    <Container
      position={"relative"}
      border={"0px solid teal"}
      maxW="100%"
      overflow="hidden"
      bg={"#f6f6f6"}
    >
      <Box
        position="absolute"
        top={"-10"}
        left={"-20"}
        width={"135px"}
        height="145px"
        borderRadius={"0 0 50% 50%/0 0 100% 100%"}
        bg="#97e2e7"
      ></Box>
      <Flex ml={"10"} mt="5">
        <Box flex={"50%"} className="text1">
          <Text
            fontSize={"40px"}
            fontWeight="500"
            className="text"
            lineHeight={"60px"}
            padding={"0"}
            m="0"
          >
            Last Hope K9
          </Text>
          <Text fontSize={"26px"} fontWeight="500" lineHeight={"28px"}>
            Where last hope <br />
            becomes a{" "}
            <span style={{ borderBottom: "4px solid red" }}>new begining.</span>
          </Text>
        </Box>
        <Flex flex={"50%"} justifyContent={"space-around"}>
          <Image h="140px" w="140px" src={img1}></Image>
          <Image h="140px" w="140px" src={img2}></Image>
          <Image h="140px" w="140px" src={img3}></Image>
          <Image h="140px" w="140px" src={img4}></Image>
        </Flex>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Box width={"35%"} borderRight={""}>
          <ContainerLeft />
        </Box>
        <Box width={"65%"}>
          <ContainerRight  />
        </Box>
      </Flex>
    
    </Container>
  );
};
