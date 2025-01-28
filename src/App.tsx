import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./NavBar";
import GameGrid from "./components/Games/GameGrid";
import GenreList from "./components/Genres/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import OrderSelector from "./components/Genres/OrderSelector";
import GameHeading from "./components/Games/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav nav"
               "aside main"
               "footer footer"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: " 200px 1fr",
        }}
        gap={2}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(search) => setGameQuery({ ...gameQuery, search })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} marginLeft={3}>
            <GenreList
              handleSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} marginLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <PlatformSelector
            handleSelect={(platform) => {
              setGameQuery({ ...gameQuery, platform });
            }}
            selectedPlatform={gameQuery.platform}
          />
          <OrderSelector
            sortOrder={gameQuery.sortOrder}
            handleOrderSelector={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          <GameGrid selectedGameQuery={gameQuery} />
        </GridItem>
        <GridItem bg={"gray.300"} area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
