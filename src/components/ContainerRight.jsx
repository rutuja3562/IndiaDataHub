import React from "react";
import {
  Grid,
  GridItem,
  Heading,
  Progress,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Gridcontainer, Gridcontainer4 } from "./Gridcontainer4";
import { GridContainer3 } from "./GridContainer3";
export const ContainerRight = () => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <GridItem colSpan={2} padding={"20px"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Text
            color={"#505050"}
            fontSize={"28px"}
            fontWeight={"600"}
            padding="2px"
            margin={"0"}
            letterSpacing={"-1px"}
          >
            Avg Time to Adopt
          </Text>
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"600"}
            width={"200px"}
            _hover={{
              border: "1px solid black",
            }}
            mb={"10px"}
          >
            45 days
          </Text>
        </Box>
        <Heading
          as="h3"
          size="md"
          color={"#505050"}
          fontWeight={"600"}
          padding={"10px"}
          mb="5px"
        >
          Avg Time to Adopt by Age Bucket{" "}
        </Heading>

        <Flex alignItems={"center"} mb="5px">
          <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
            0-1 Puppy
          </Text>
          <Box width={"30%"} mr={"10px"}>
            <Progress
              colorScheme="#97e2e7"
              bg={"#B2EBF2"}
              size="md"
              value={100}
            />
          </Box>
          <Text width="30%" fontSize={"12px"} fontWeight={"600"}>
            30 days
          </Text>
        </Flex>
        <Flex alignItems={"center"} mb="5px">
          <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
            2-6 Adult
          </Text>
          <Box width={"40%"} mr={"10px"}>
            <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
          </Box>
          <Text fontSize={"12px"} fontWeight={"600"}>
            85 days
          </Text>
        </Flex>
        <Flex alignItems={"center"} mr={"10px"} mb="5px">
          <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
            7+ Senior
          </Text>
          <Box width={"50%"} mr={"10px"}>
            <Progress
              colorScheme="#97e2e7"
              bg={"#B2EBF2"}
              size="md"
              value={100}
            />
          </Box>
          <Text fontSize={"12px"} fontWeight={"600"}>
            103 days
          </Text>
        </Flex>
        <Text textAlign={"center"} fontWeight={"600"} fontSize={"12px"}>
          Note: Starts at Date of Transport
        </Text>
      </GridItem>
      <GridItem colSpan={2} padding={"20px"}>
        <Box>
          <Heading
            as="h2"
            color="#464646"
            fontWeight={"600"}
            size="lg"
            mb="5px"
          >
            Characteristics
          </Heading>
          <Heading
            as="h3"
            size="md"
            color={"#505050"}
            fontWeight={"600"}
            mb="5px"
          >
            Proportion of Dogs that...
          </Heading>
          <Flex mb="5px" mt="5px">
            <Text
              width={"45%"}
              fontSize="12px"
              fontWeight={"500"}
              mb="5px"
              mt="5px"
            >
              Gets Along with Dogs
            </Text>
            <Flex
              width={"40%"}
              height="20px"
              fontSize={"12px"}
              textAlign="center"
              fontWeight={500}
            >
              <Box width={"87%"} bg={"#B2EBF2"}>
                87%
              </Box>
              <Box width={"1%"} bg="grey"></Box>
              <Box width={"12%"} bg="lightgrey"></Box>
            </Flex>
          </Flex>
          <Flex mb="5px">
            <Text width={"45%"} fontSize="12px" fontWeight={"500"}>
              Gets Along with Cats
            </Text>
            <Flex
              width={"40%"}
              height="20px"
              fontSize={"12px"}
              textAlign="center"
              fontWeight={500}
            >
              <Box width={"29%"} bg={"#B2EBF2"}>
                29%
              </Box>
              <Box width={"7%"} bg="grey"></Box>
              <Box width={"64%"} bg="lightgrey">
                64%
              </Box>
            </Flex>
          </Flex>
          <Flex mb="5px">
            <Text width={"45%"} fontSize="12px" fontWeight={"500"}>
              Gets Along with Kids
            </Text>
            <Flex
              width={"40%"}
              height="20px"
              fontSize={"12px"}
              textAlign="center"
              fontWeight={500}
            >
              <Box width={"58%"} bg={"#B2EBF2"}>
                58%
              </Box>
              <Box width={"3%"} bg="grey"></Box>
              <Box width={"39%"} bg="lightgrey"></Box>
            </Flex>
          </Flex>
          <Flex mb="5px">
            <Text width={"45%"} fontSize="12px" fontWeight={"500"}>
              Are Housebroken
            </Text>
            <Flex
              width={"40%"}
              height="20px"
              fontSize={"12px"}
              textAlign="center"
              fontWeight={500}
            >
              <Box width={"38%"} bg={"#B2EBF2"}>
                38%
              </Box>
              <Box width={"6%"} bg="grey"></Box>
              <Box width={"56%"} bg="lightgrey">
                56%
              </Box>
            </Flex>
          </Flex>
        </Box>
      </GridItem>
      <GridItem colSpan={2} padding={"20px"}>
        <Heading
          as="h3"
          size="md"
          color={"#505050"}
          fontWeight={"600"}
          mb="5px"
        >
          Avg Time to Adopt over Time
        </Heading>
        <GridContainer3 />
      </GridItem>
      <GridItem colSpan={2} padding={"20px"}>
        <Gridcontainer4 />
      </GridItem>
    </Grid>
  );
};
