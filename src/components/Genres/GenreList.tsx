import { Heading, Spinner, Stack } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import GenreCard from "./GenreCard";

interface Props {
  handleSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, handleSelect }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <>
      {isLoading && <Spinner marginLeft={3} marginTop={3} size="md" />}
      <Heading marginBottom={5} color="tomato">
        Genres
      </Heading>
      <Stack>
        {data.map((genre) => (
          <GenreCard
            onSelect={() => handleSelect(genre)}
            key={genre.id}
            imageurl={genre.image_background}
            title={genre.name}
            fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
            color={selectedGenre?.id == genre.id ? "tomato" : ""}
          />
        ))}
      </Stack>
    </>
  );
};

export default GenreList;
