import React from 'react'
import { 
    SimpleGrid ,
    Box,
    Heading,
    Text,
    Image,
    Stack,
    ButtonGroup,
    IconButton,
    Icon,
    HStack
} from "@chakra-ui/react"
import APlaceholder from '_resources/images/avatar.png';
import Agam from '_resources/images/Agam.jpg';
import Lasitha from '_resources/images/Lasitha.jpg';
import Michelle from '_resources/images/Michelle.jpg';
import Ritesh from '_resources/images/Ritesh.jpg';
import Uzair from '_resources/images/Uzair.jpg';
import { FaLinkedin, FaGithub, FaLink } from 'react-icons/fa';

export default function Team() {
    return (
        <Box bg='gray.800' align='center'>

            <Box display='block' >
                <Heading
                    fontSize={{ base: '3em', md: '4em', lg: '5em' }}
                    fontWeight='500'
                    align='center'
                    color='purple.200'
                    pt='7%'>
                    About the Team
                </Heading>
                <Text
                    fontSize={{ base: '1em', md: '1.5em', lg: '2em' }}
                    align='center'
                    color='white'
                    p='7%'
                    pt='2%'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation
                </Text>
            </Box>

            <Box>
                <SimpleGrid 
                    columns={[1, 1, 3]} 
                    align='center' 
                    spacing='8' 
                    maxW='8xl' 
                    px='7%'
                    pb='7%'>

                    <Stack align='center' spacing={2} py='7%'>
                        <Image 
                            borderRadius='full' 
                            src={Ritesh} 
                            alt='Ritesh'
                            boxSize='150px' />
                        <Text fontSize='1.1em' fontWeight='semibold' color='white'>Ritesh Ahlawat</Text>
                        <Text color='gray.400'>Role</Text>
                        <Text color='white'>Description</Text>
                        <HStack spacing={2}>
                            <Icon href='#' aria-label='Linkedin' as={FaLinkedin} color='purple.200' />
                            <Icon href='#' aria-label='Github' as={FaGithub} color='purple.200' />
                        </HStack>
                    </Stack>

                    <Stack align='center' spacing={2} py='7%'>
                        <Image 
                            borderRadius="full" 
                            src={Michelle} 
                            alt='Michelle'
                            boxSize="150px" />
                        <Text fontSize='1.1em' fontWeight='semibold' color='white'>Michelle Lenartowicz</Text>
                        <Text color='gray.400'>Role</Text>
                        <Text color='white'>Description</Text>
                        <HStack spacing={2}>
                            <Icon href='#' aria-label='Linkedin' as={FaLinkedin} color='purple.200' />
                            <Icon href='#' aria-label='Github' as={FaGithub} color='purple.200' />
                        </HStack>
                    </Stack>

                    <Stack align='center' spacing={2} py='7%'>
                        <Image 
                            borderRadius="full" 
                            src={Uzair} 
                            alt='Uzair'
                            boxSize="150px" />
                        <Text fontSize='1.1em' fontWeight='semibold' color='white'>Uzair</Text>
                        <Text color='gray.400'>Role</Text>
                        <Text color='white'>Description</Text>
                        <HStack spacing={2}>
                            <Icon href='#' aria-label='Linkedin' as={FaLinkedin} color='purple.200' />
                            <Icon href='#' aria-label='Github' as={FaGithub} color='purple.200' />
                        </HStack>
                    </Stack>

                    <Stack align='center' spacing={2} py='7%'>
                        <Image 
                            borderRadius="full" 
                            src={Lasitha} 
                            alt='Lasitha'
                            boxSize="150px" />
                        <Text fontSize='1.1em' fontWeight='semibold' color='white'>Lasitha</Text>
                        <Text color='gray.400'>Role</Text>
                        <Text color='white'>Description</Text>
                        <HStack spacing={2}>
                            <Icon href='#' aria-label='Linkedin' as={FaLinkedin} color='purple.200' />
                            <Icon href='#' aria-label='Github' as={FaGithub} color='purple.200' />
                        </HStack>
                    </Stack>

                    <Stack align='center' spacing={2} py='7%'>
                        <Image 
                            borderRadius="full" 
                            src={Agam} 
                            alt='Agam'
                            boxSize="150px" />
                        <Text fontSize='1.1em' fontWeight='semibold' color='white'>Agam</Text>
                        <Text color='gray.400'>Role</Text>
                        <Text color='white'>Description</Text>
                        <HStack spacing={2}>
                            <Icon href='#' aria-label='Linkedin' as={FaLinkedin} color='purple.200' />
                            <Icon href='#' aria-label='Github' as={FaGithub} color='purple.200' />
                        </HStack>
                    </Stack>

                    <Stack align='center' spacing={2} py='7%'>
                        <Image 
                            borderRadius="full" 
                            src={APlaceholder} 
                            alt='David'
                            boxSize="150px" />
                        <Text fontSize='1.1em' fontWeight='semibold' color='white'>David Chan</Text>
                        <Text color='gray.400'>Role</Text>
                        <Text color='white'>Description</Text>
                        <HStack spacing={2}>
                            <Icon href='#' aria-label='Linkedin' as={FaLinkedin} color='purple.200' />
                            <Icon href='#' aria-label='Github' as={FaGithub} color='purple.200' />
                        </HStack>
                    </Stack>

                </SimpleGrid>
            </Box>

        </Box>
    )
}

