import React from "react";
import { Box, Flex, Progress, Text, Heading } from "@chakra-ui/react";
export const Gridcontainer4 = () => {
  return (
    <Box>
      <Heading as="h3" size="md" color={"#505050"} fontWeight={"600"} mb="5px">
        Top 10 Primery Breeds (Including Mixes)
      </Heading>
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          Labradore
        </Text>
        <Box width={"50%"} mr={"10px"}>
          <Progress
            colorScheme="#97e2e7"
            bg={"#B2EBF2"}
            size="md"
            value={100}
          />
        </Box>
        <Text width="30%" fontSize={"12px"} fontWeight={"600"}>
          1,422
        </Text>
      </Flex>
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          Pit
        </Text>
        <Box width={"43%"} mr={"10px"}>
          <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
        </Box>
        <Text fontSize={"12px"} fontWeight={"600"}>
          838
        </Text>
      </Flex>
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          Hound
        </Text>
        <Box width={"26%"} mr={"10px"}>
          <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
        </Box>
        <Text fontSize={"12px"} fontWeight={"600"}>
          400
        </Text>
      </Flex>
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          Shephered
        </Text>
        <Box width={"22%"} mr={"10px"}>
          <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
        </Box>
        <Text fontSize={"12px"} fontWeight={"600"}>
          376
        </Text>
      </Flex>
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          Terrier
        </Text>
        <Box width={"19%"} mr={"10px"}>
          <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
        </Box>
        <Text fontSize={"12px"} fontWeight={"600"}>
          306
        </Text>
      </Flex>{" "}
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          American
        </Text>
        <Box width={"15%"} mr={"10px"}>
          <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
        </Box>
        <Text fontSize={"12px"} fontWeight={"600"}>
          157
        </Text>
      </Flex>
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          Catehoula
        </Text>
        <Box width={"13%"} mr={"10px"}>
          <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
        </Box>
        <Text fontSize={"12px"} fontWeight={"600"}>
          155
        </Text>
      </Flex>{" "}
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          Hounds
        </Text>
        <Box width={"10%"} mr={"10px"}>
          <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
        </Box>
        <Text fontSize={"12px"} fontWeight={"600"}>
          150
        </Text>
      </Flex>
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          Australian
        </Text>
        <Box width={"7%"} mr={"10px"}>
          <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
        </Box>
        <Text fontSize={"12px"} fontWeight={"600"}>
          126
        </Text>
      </Flex>{" "}
      <Flex alignItems={"center"} mb="5px">
        <Text width={"20%"} fontSize={"12px"} fontWeight={"600"}>
          Mountain
        </Text>
        <Box width={"5%"} mr={"10px"}>
          <Progress colorScheme="" bg={"#B2EBF2"} size="md" value={100} />
        </Box>
        <Text fontSize={"12px"} fontWeight={"600"}>
          108
        </Text>
      </Flex>
    </Box>
  );
};
