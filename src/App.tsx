import { Grid, GridItem, Show, HStack, Heading } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedOrder, setOrder] = useState<string>("Relevance");
  const [searchText, setSearchText] = useState<string>("");
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main" ` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText) => setSearchText(searchText)}></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Heading padding={8} paddingLeft={2} fontSize={60}>
            {selectedPlatform ? selectedPlatform.name + " " : ""}
            {selectedGenre ? selectedGenre.name + " " : ""}Games
          </Heading>
          <HStack spacing={5} paddingLeft={2}>
            <PlatformSelector
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
              selectedPlatform={selectedPlatform}
            />
            <SortSelector
              onSelectOrder={setOrder}
              selectedOrder={selectedOrder}
            />
          </HStack>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            selectedOrder={selectedOrder}
            searchText={searchText}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
