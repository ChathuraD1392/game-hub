import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe, BsPlaystation } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiPlaystation, SiPlaystation2 } from "react-icons/si";
import { Platform } from "../../hooks/useGames";

interface Props {
  platform: Platform[];
}

const PlatformIcons = ({ platform }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation2: BsPlaystation,
    playstation3: FaPlaystation,
    playstation4: SiPlaystation,
    playstation5: SiPlaystation2,
    xbox: FaXbox,
    "xbox-one": FaXbox,
    "xbox-series-x": FaXbox,
    xbox360: FaXbox,
    nintendo: SiNintendo,
    "nintendo-switch": SiNintendo,
    mac: FaApple,
    macos: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    ios: MdPhoneIphone,
  };
  return (
    <>
      {platform.map((p) => (
        <Icon key={p.id} as={IconMap[p.slug]} color={"green.500"} scale={10} />
      ))}
    </>
  );
};

export default PlatformIcons;
