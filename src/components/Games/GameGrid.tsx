import { SimpleGrid, Text } from "@chakra-ui/react";

import { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGameQuery: GameQuery;
}

const GameGrid = ({ selectedGameQuery }: Props) => {
  const { data, error, isLoading } = useGames(selectedGameQuery);
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        marginTop={3}
        marginBottom={5}
        justifyContent={"space-around"}
      >
        {isLoading && skeltons.map((s) => <GameCardSkeleton key={s} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>

      {error && <Text>{error}</Text>}
    </>
  );
};

export default GameGrid;
