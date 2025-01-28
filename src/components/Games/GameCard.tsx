import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import getCroppedImage from "../../services/Image-url";
import Emoji from "./Emoji";
import GameCardContainer from "./GameCardContainer";
import MetaCriticScore from "./MetaCriticScore";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <GameCardContainer>
        <Card>
          <Image src={getCroppedImage(game.background_image)} />
          <CardBody>
            <Heading
              textAlign="left"
              fontSize="19px"
              color="blue.300"
              fontWeight="bold"
            >
              {game.name}
            </Heading>
            <HStack justifyContent="space-between" margin={2}>
              <HStack marginY={1}>
                <PlatformIcons
                  platform={game.platforms.map((platform) => platform.platform)}
                />
              </HStack>
              <Stack>
                <MetaCriticScore metacritic={game.metacritic} />
              </Stack>
            </HStack>
            <Emoji rating={game.rating_top} />
          </CardBody>
        </Card>
      </GameCardContainer>
    </>
  );
};

export default GameCard;
