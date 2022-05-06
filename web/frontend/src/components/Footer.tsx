import React from 'react'
import {
    Box,
    Stack,
    StackDivider,
    SimpleGrid,
    Heading,
    Text, 
    Input,
    Button,
    ButtonGroup,
    IconButton,

} from '@chakra-ui/react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Box as='footer' role='contentinfo' mx='auto' maxW='7xl' py='12' px={{ base: '8' }}>
					<Stack spacing='10' divider={<StackDivider />}>
						<Stack
							direction={{ base: 'column', lg: 'row' }}
							spacing={{ base: '10', lg: '28' }}>
							<Box flex='1'>
								<Heading size='md' color='purple.400'>
									(logo) Thia
								</Heading>
							</Box>
							<Stack
								direction={{ base: 'column', md: 'row' }}
								spacing={{ base: '10', md: '20' }}>
								<SimpleGrid
									columns={3}
									spacing={{ base: '10', md: '20', lg: '28' }}
									flex='1'>
									<Box minW='130px'>
										<Heading
											as='h4'
											fontSize='sm'
											fontWeight='semibold'
											textTransform='uppercase'
											letterSpacing='wider'
											mb='4'>
											Product
										</Heading>
										<Stack>
											<Link to='/docs'>Docs</Link>
											<Link to='/pricing'>Pricing</Link>
											<Link to='/blogs'>Blogs</Link>
											<Link to='/install'>Install</Link>
										</Stack>
									</Box>
									<Box minW='130px'>
										<Heading
											as='h4'
											fontSize='sm'
											fontWeight='semibold'
											textTransform='uppercase'
											letterSpacing='wider'
											mb='4'>
											About Us
										</Heading>
										<Stack>
											<Link to='/team'>Team</Link>
											<Link to='/mission'>Our Mission</Link>
											<Link to='/careers'>Careers</Link>
											<Link to='/contact'>Contact</Link>
										</Stack>
									</Box>
									<Box minW='130px' ml='4'>
										<Heading
											as='h4'
											fontSize='sm'
											fontWeight='semibold'
											textTransform='uppercase'
											letterSpacing='wider'
											mb='4'>
											Legal
										</Heading>
										<Stack>
											<Link to='/privacy'>Privacy</Link>
											<Link to='/terms'>Terms</Link>
											<Link to='/license'>License</Link>
										</Stack>
									</Box>
								</SimpleGrid>
								<Stack width={{ base: 'full', md: 'sm' }} spacing='4'>
									<Heading
										as='h4'
										fontSize='sm'
										fontWeight='semibold'
										textTransform='uppercase'
										letterSpacing='wider'
										mb='4'>
										Subscribe to our newsletter
									</Heading>
									<Text>
										Get notified when we add new components or we have exciting
										news for you!
									</Text>
									<Stack spacing='4' direction={{ base: 'column', md: 'row' }}>
										<Input
											bg='inherit'
											placeholder='Enter your email'
											type='email'
											required
											focusBorderColor='blue.500'
											_placeholder={{ opacity: 1, color: 'gray.500' }}
										/>
										<Button
											type='submit'
											colorScheme='purple'
											flexShrink={0}
											width={{ base: 'full', md: 'auto' }}>
											Subscribe
										</Button>
									</Stack>
								</Stack>
							</Stack>
						</Stack>
						<Stack
							direction={{ base: 'column', md: 'row' }}
							justifyContent='space-between'
							alignItems='center'>
							<Text fontSize='sm'>
								&copy; 2021 Thia CA, Inc. All rights reserved.
							</Text>
							<ButtonGroup colorScheme='purple'>
								<IconButton href='#' aria-label='Github' icon={<FaLinkedin />} />
								<IconButton href='#' aria-label='Twitter' icon={<FaTwitter />} />
							</ButtonGroup>
						</Stack>
					</Stack>
				</Box>
    )
}
