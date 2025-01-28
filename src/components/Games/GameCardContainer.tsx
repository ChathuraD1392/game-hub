import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box overflow={"hidden"} borderRadius={10} margin={2}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
