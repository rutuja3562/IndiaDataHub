import React from "react";
import {  Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { LeftChart, } from "./LeftChart";
const LeftDiv = styled.div`
  .top {
    border-right: 2px solid lightgray;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
  }
  .div1 {
    width: 100%;
    text-align: center;
  }
  .leftchart {
    border: 1px solid grey;
    color: transparent;
  }
`;
const Button = styled.button`
  &.btn {
    padding: 0px 50px 5px 50px;
    /* border: 2px solid red; */
    font-size: 30px;
    transition: 0;
    transform: 0;
   margin-bottom: 10px;
  }
  &:hover {
    border: 1px solid black;
  }
`;
export const ContainerLeft = () => {
  return (
    <LeftDiv>
      <div className="top">
        <div className="div1">
          <Text fontSize={"28"} fontWeight="600">
            Lives Saved
          </Text>
          <Button className="btn">
            {" "}
            <Heading letterSpacing={"5"} fontSize={"58"} fontWeight="600">
              10,875
            </Heading>
          </Button>
        </div>
        <div className="leftchart">
          <LeftChart />
        </div>
      </div>
    </LeftDiv>
  );
};
