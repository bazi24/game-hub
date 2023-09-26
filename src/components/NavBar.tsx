import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo_ecotrace.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} margin="10px" width="220px" height="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};
