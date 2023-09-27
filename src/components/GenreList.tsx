import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <>
      {isLoading && <Spinner color="green.500" />}
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                src={getCroppedImageURL(genre.image_background)}
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  genre.id === selectedGenre?.id ? "extrabold" : "normal"
                }
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
