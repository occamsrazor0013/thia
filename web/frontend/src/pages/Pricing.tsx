import React from 'react'
import {
    Box,
    SimpleGrid,
    VStack,
    Icon,
    Heading,
    Flex,
    Text,
    Button,
    List,
    ListItem,
    ListIcon, 
    ChakraProvider,
    extendTheme
} from '@chakra-ui/react'
import { FaCat, FaSpider, FaDragon, FaRegCheckCircle } from 'react-icons/fa'
import Blue from '_resources/images/blue.png';
import '@fontsource/oxygen/400.css';

export default function Privacy() {
    const theme = extendTheme({
		fonts: {
			heading: 'Oxygen',
		},
        components: {
			Button: {
				baseStyle: {
					_focus: {
						boxShadow: 'none',
					},
				},
			},
		},
	});
    return (
        <ChakraProvider theme={theme}>
            <Box>
                <Box
                    bg='gray.800'
                    bgImage={`url(${Blue})`}
                    backgroundPosition='center'
                    backgroundRepeat='no-repeat'>
                    <Heading
                        fontSize={{ base: '3em', md: '4em', lg: '5em' }}
                        fontWeight='500'
                        align='center'
                        color='purple.200'
                        pt='8%'>
                        Redefine your App
                    </Heading>
                    <Text
                        fontSize={{ base: '1em', md: '1.33em', lg: '1.66em' }}
                        fontWeight='100'
                        align='center'
                        color='white'
                        p='2%'>
                        Enhance your cloud AutoML experience with three custom packages built towards you
                    </Text>
                </Box>
                <Box bg='gray.800' p='5%'>
                    <SimpleGrid 
                        columns={{ base: 1, xl: 3 }}
                        spacing={{ base: 10, xl: 4}}
                        justifyItems='center'>
                        <Box
                            maxW='md'
                            width='100%'
                            px='6'
                            pb='6'
                            pt='16'
                            bg='gray.700'
                            rounded={{ sm: 'xl' }}
                            align='center'>
                            <VStack spacing={6}>
                                <Icon as={FaCat} fontSize="4xl" color='purple.200' />
                                <Heading size='md' fontWeight='extrabold' color='white'>
                                    Name
                                </Heading>
                            </VStack>
                            <Flex 
                                justify='center'
                                align='center' 
                                color='purple.200' 
                                my='8'>
                                <Heading size='3xl' fontWeight='inherit'>
                                    $Price
                                </Heading>
                                <Text fontSize='2xl'>
                                    / year
                                </Text>
                            </Flex>
                            <List 
                                spacing='4'
                                mb='8'
                                maxW='28ch'
                                mx='auto'>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 1
                                </ListItem>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 2
                                </ListItem>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 3
                                </ListItem>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 4
                                </ListItem>
                            </List>
                            <Button
                                _hover={{ color: 'purple.200' }}
                                color='white'
                                border='1px'
                                size='lg'
                                w='full'
                                fontWeight='extrabold'
                                py={{ md: '7'}}
                                variant='outline'
                                borderWidth='2px'>
                                Buy Now
                            </Button>
                        </Box>
                        <Box
                            maxW='md'
                            width='100%'
                            px='6'
                            pb='6'
                            pt='16'
                            bg='gray.700'
                            rounded={{ sm: 'xl' }}
                            align='center'>
                            <VStack spacing={6}>
                                <Icon as={FaSpider} fontSize="4xl" color='purple.200' />
                                <Heading size='md' fontWeight='extrabold' color='white'>
                                    Name
                                </Heading>
                            </VStack>
                            <Flex 
                                justify='center' 
                                align='center'
                                color='purple.200' 
                                my='8'>
                                <Heading size='3xl' fontWeight='inherit'>
                                    $Price
                                </Heading>
                                <Text fontSize='2xl'>
                                    / year
                                </Text>
                            </Flex>
                            <List 
                                spacing='4'
                                mb='8'
                                maxW='28ch'
                                mx='auto'>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 1
                                </ListItem>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 2
                                </ListItem>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 3
                                </ListItem>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 4
                                </ListItem>
                            </List>
                            <Button
                                _hover={{ color: 'purple.200' }}
                                color='white'
                                border='1px'
                                size='lg'
                                w='full'
                                fontWeight='extrabold'
                                py={{ md: '7'}}
                                variant='outline'
                                borderWidth='2px'>
                                Buy Now
                            </Button>
                        </Box>
                        <Box
                            maxW='md'
                            width='100%'
                            px='6'
                            pb='6'
                            pt='16'
                            bg='gray.700'
                            rounded={{ sm: 'xl' }}
                            align='center'>
                            <VStack spacing={6}>
                                <Icon as={FaDragon} fontSize="4xl" color='purple.200' />
                                <Heading size='md' fontWeight='extrabold' color='white'>
                                    Name
                                </Heading>
                            </VStack>
                            <Flex 
                                justify='center' 
                                align='center'
                                color='purple.200' 
                                my='8'>
                                <Heading size='3xl' fontWeight='inherit'>
                                    $Price
                                </Heading>
                                <Text fontSize='2xl'>
                                    / year
                                </Text>
                            </Flex>
                            <List 
                                spacing='4'
                                mb='8'
                                maxW='28ch'
                                mx='auto'>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 1
                                </ListItem>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 2
                                </ListItem>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 3
                                </ListItem>
                                <ListItem fontWeight='medium' color='white'>
                                    <ListIcon 
                                        fontSize='xl' 
                                        as={FaRegCheckCircle} 
                                        marginEnd={2} 
                                        color='purple.200' />
                                        Feature 4
                                </ListItem>
                            </List>
                            <Button
                                _hover={{ color: 'purple.200' }}
                                color='white'
                                border='1px'
                                size='lg'
                                w='full'
                                fontWeight='extrabold'
                                py={{ md: '7'}}
                                variant='outline'
                                borderWidth='2px'>
                                Buy Now
                            </Button>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box
                    bg='gray.800'
                    pb='3%'
                    backgroundPosition='center'
                    backgroundRepeat='no-repeat'>
                    <Heading
                        fontSize={{ base: '2em', md: '2.5em', lg: '3em' }}
                        fontWeight='500'
                        align='center'
                        color='white'
                        px='5%'>
                        Everything You Need. For an Unbeatable Price.
                    </Heading>
                    <Text
                        fontSize={{ base: '1em', md: '1.33em', lg: '1.66em' }}
                        fontWeight='100'
                        align='center'
                        color='white'
                        p='2%'>
                        Got questions? Check out our FAQ.
                    </Text>
                </Box>
            </Box>
        </ChakraProvider>
    )
}
