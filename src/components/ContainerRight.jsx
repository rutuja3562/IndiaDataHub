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
export const ContainerRight = () => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <GridItem colSpan={2} border={"1px"}>
        <Heading>Avg Time to Adopt</Heading>
        <Heading>45 days</Heading>
        <Text>Avg Time to Adopt by Age Bucket </Text>
        <Flex alignItems={"center"}>
          <Text width={"20%"}>0-1 Puppy</Text>
          <Box width={"30%"}>
            <Progress
              colorScheme="#97e2e7"
              bg={"#B2EBF2"}
              size="md"
              value={100}
            />
          </Box>
          <Text width="30%">30 days</Text>
        </Flex>
        <Flex alignItems={"center"}>
          <Text width={"20%"}>2-6 Adult</Text>
          <Box width={"40%"}>
            <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
          </Box>
          <Text>85 days</Text>
        </Flex>
        <Flex alignItems={"center"}>
          <Text width={"20%"}>7+ Senior</Text>
          <Box width={"50%"}>
            <Progress
              colorScheme="#97e2e7"
              bg={"#B2EBF2"}
              size="md"
              value={100}
            />
          </Box>
          <Text>103 days</Text>
        </Flex>
        <Text textAlign={"center"} fontSize={"12px"}>Note: Starts at Date of Transport</Text>
      </GridItem>
      <GridItem colSpan={2} border="1px">
        jj
      </GridItem>
      <GridItem colSpan={2} border="1px">
        bb
      </GridItem>
      <GridItem colSpan={2} border="1px">
        jj
      </GridItem>
    </Grid>
  );
};
