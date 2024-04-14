import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const MoviePlayer = () => {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <Box>
      <Text>Playing: {movie.title}</Text>
      {}
    </Box>
  );
};

export default MoviePlayer;
