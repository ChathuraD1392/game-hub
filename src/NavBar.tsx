import { HStack, Image } from "@chakra-ui/react";
import logo from "./assets/logo.png";
import ColorModeSwitch from "./components/ColorModeSwitch";
import SearchInput from "./components/SearchInput";

interface Props {
  onSearch: (keyword: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack margin={5}>
      <HStack marginRight={5} gap={10}>
        <Image boxSize={"60px"} src={logo} marginRight={5} />
      </HStack>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
