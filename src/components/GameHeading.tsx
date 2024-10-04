import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Aciton Games
  // Xbox games
  // Xbox action Games
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <>
      <Heading as="h1" marginY={0} fontSize={"5xl"}>
        {heading}
      </Heading>
      <p>Based on your rating</p>
    </>
  );
};

export default GameHeading;
