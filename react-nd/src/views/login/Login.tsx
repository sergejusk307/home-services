import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Link,
  FormErrorMessage,
} from '@chakra-ui/react';

import { UserContext } from '@/context/UserContext';

export const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const userData = { username, password };
      login(userData);
      navigate('/');
    }
  };

  // Redirect to home page if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize="3xl" color={'primary.500'}>
            Welcome Back
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            Sign in to your account to enjoy all our features.
          </Text>
          <form>
            <FormControl id="username" isInvalid={errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="on"
              />
              {errors.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="on"
              />
              {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox borderColor={'primary.500'} colorScheme={'purple'}>
                  Remember me
                </Checkbox>
                <Link color={'primary.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'purple'} variant={'solid'} onClick={handleSubmit}>
                Sign in
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={'/images/home-hero-details.png'} />
      </Flex>
    </Stack>
  );
};
