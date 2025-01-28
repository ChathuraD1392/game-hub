import { Badge } from "@chakra-ui/react";

const MetaCriticScore = ({ metacritic }: { metacritic: number }) => {
  let color =
    metacritic > 90
      ? "red"
      : metacritic > 80
      ? "olive"
      : metacritic > 70
      ? "salmon"
      : "white";
  return (
    <Badge variant="solid" bg={color} fontSize="14px" paddingX={2}>
      {metacritic}
    </Badge>
  );
};

export default MetaCriticScore;
