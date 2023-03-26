import React from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Spacer } from "@chakra-ui/react";

function Header() {
  return (
    <Flex bg="gray.200" p="4">
      <Link to="/">
        <Heading>PeopleWeave</Heading>
      </Link>
      <Spacer />
      <Link to="/data">
        <Heading>Data</Heading>
      </Link>
      <Spacer />
      <Link to="/contact">
        <Heading>Contact</Heading>
      </Link>
    </Flex>
  );
}

export default Header;
