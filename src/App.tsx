import {
  Stack,
  StackDivider,
  Text,
  Button,
  CircularProgress,
} from '@chakra-ui/react';

function App() {
  return (
    <Stack
      spacing={6}
      direction={{ base: 'column', md: 'row' }}
      divider={<StackDivider />}
    >
      <Button leftIcon={<span>H</span>} colorScheme='red'>
        Botón 1
      </Button>
      <Button
        isLoading
        loadingText='esta cargando'
        spinner={<CircularProgress isIndeterminate size={6} />}
        colorScheme='blue'
        variant='outline'
      >
        Botón 2
      </Button>
      <Button colorScheme='pink' variant='ghost'>
        Botón 3
      </Button>
      <Button colorScheme='purple' variant='link'>
        Botón 4
      </Button>
      <Button colorScheme='telegram' variant='unstyled'>
        Botón 5
      </Button>
    </Stack>
  );
}

export default App;
