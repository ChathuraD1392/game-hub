import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginLeft={1} marginBottom={8} as="h1" color="green.400">
      {heading}
    </Heading>
  );
};

export default GameHeading;
