import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo_ecotrace.svg";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} margin="10px" width="220px" height="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};
