import {
  Box,
  Button,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { extractColors } from 'extract-colors';
import { useLocalStorage } from 'usehooks-ts';

export const BusinessCard = ({ name, logo, category }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [dominantColor, setDominantColor] = useState('#ffffff');

  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  useEffect(() => {
    setIsFavorite(favorites.includes(name));
  }, [favorites, name]);

  useEffect(() => {
    async function getDominantColor() {
      const colors = await extractColors(logo); // Images don't change often, possible to cache
      if (colors.length > 0) {
        const colorWithLargestArea = colors.sort((a, b) => b.area - a.area)[0];
        setDominantColor(colorWithLargestArea.hex);
      }
    }
    getDominantColor();
  }, [logo]);

  const addFavorite = () => {
    let newFavorites = new Set(favorites);
    newFavorites.add(name);

    setFavorites([...newFavorites]);
    setIsFavorite(true);
  };

  const removeFavorite = () => {
    const newFavorites = new Set(favorites);
    newFavorites.delete(name);
    setFavorites([...newFavorites]);
    setIsFavorite(false);
  };

  const toggleFavorite = isFavorite ? removeFavorite : addFavorite;

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundColor: dominantColor,
            filter: 'blur(10px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={logo}
            alt={`${name} logo`}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {category}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
        </Stack>

        <Flex justify={'space-between'} align={'center'} pt={4}>
          <Button colorScheme="primary" variant="solid" size="md">
            Book Now
          </Button>
          <IconButton
            icon={isFavorite ? <FaHeart /> : <FaRegHeart />}
            aria-label="Add to favorite"
            isRound
            size="md"
            colorScheme={isFavorite ? 'red' : 'gray'}
            onClick={toggleFavorite}
          />
        </Flex>
      </Box>
    </Center>
  );
};
