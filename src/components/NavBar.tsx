import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo_ecotrace.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} margin="10px" width="220px" height="60px"></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
