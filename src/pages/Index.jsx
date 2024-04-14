import React from "react";
import { Box, Flex, VStack, HStack, Text, Image, Button, IconButton, Grid, GridItem } from "@chakra-ui/react";
import { FaPlay, FaHome, FaSearch, FaUser } from "react-icons/fa";

const Index = () => {
  const movies = [
    { title: "Movie 1", image: "https://images.unsplash.com/photo-1579762689878-ce41dd75ad98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDF8ZW58MHx8fHwxNzEzMDgwMjczfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { title: "Movie 2", image: "https://images.unsplash.com/photo-1579762689878-ce41dd75ad98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDJ8ZW58MHx8fHwxNzEzMDgwMjczfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { title: "Movie 3", image: "https://images.unsplash.com/photo-1533319417894-6fbb331e5513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDN8ZW58MHx8fHwxNzEzMDgwMjczfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { title: "Movie 4", image: "https://images.unsplash.com/photo-1579935110378-81262796945f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDR8ZW58MHx8fHwxNzEzMDgwMjc0fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { title: "Movie 5", image: "https://images.unsplash.com/photo-1533983988674-9a594a1cea89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDV8ZW58MHx8fHwxNzEzMDgwMjc0fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { title: "Movie 6", image: "https://images.unsplash.com/photo-1580130775562-0ef92da028de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDZ8ZW58MHx8fHwxNzEzMDgwMjc0fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  return (
    <Flex h="100vh" bg="gray.900">
      {/* Left Navbar */}
      <VStack w="200px" bg="gray.800" p={4} spacing={8} alignItems="stretch" justifyContent="space-between">
        <VStack spacing={8} alignItems="stretch">
          <IconButton icon={<FaHome />} variant="ghost" colorScheme="whiteAlpha" size="lg" />
          <IconButton icon={<FaSearch />} variant="ghost" colorScheme="whiteAlpha" size="lg" />
          <IconButton icon={<FaUser />} variant="ghost" colorScheme="whiteAlpha" size="lg" />
        </VStack>
        <IconButton icon={<FaUser />} variant="ghost" colorScheme="whiteAlpha" size="lg" />
      </VStack>

      {/* Right Content */}
      <VStack flex={1} p={8} spacing={8} alignItems="stretch">
        <Text fontSize="4xl" fontWeight="bold" color="white">
          Movies
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {movies.map((movie, index) => (
            <GridItem key={index}>
              <VStack spacing={4} p={4} bg="gray.700" borderRadius="md" alignItems="stretch">
                <Image src={movie.image} borderRadius="md" />
                <HStack justifyContent="space-between">
                  <Text color="white" fontWeight="bold">
                    {movie.title}
                  </Text>
                  <Button leftIcon={<FaPlay />} colorScheme="red" size="sm" variant="solid">
                    Play
                  </Button>
                </HStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Index;