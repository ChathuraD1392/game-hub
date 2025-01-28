import { Button, HStack, Image, Stack } from "@chakra-ui/react";

interface Props {
  imageurl: string;
  title: string;
  onSelect: () => void;
  fontWeight: string;
  color: string;
}
const GenreCard = ({ imageurl, title, fontWeight, color, onSelect }: Props) => {
  return (
    <>
      <HStack paddingBottom={2}>
        <Image
          src={imageurl}
          boxSize="40px"
          borderRadius={5}
          objectFit="cover"
        />
        <Stack gap={2}>
          <Button
            fontSize="sm"
            variant="link"
            onClick={onSelect}
            fontWeight={fontWeight}
            color={color}
            whiteSpace="normal"
            textAlign="left"
          >
            {title}
          </Button>
        </Stack>
      </HStack>
    </>
  );
};

export default GenreCard;
