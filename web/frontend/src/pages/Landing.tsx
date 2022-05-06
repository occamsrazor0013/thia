import * as React from 'react';
import {
	Flex,
	Box,
	Heading,
	Text,
	Button,
	extendTheme,
	ChakraProvider,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	useDisclosure,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Image,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import Blue from '_resources/images/blue.png';
import PlaceHolder from '_resources/images/placeholder.png';
import '@fontsource/oxygen/400.css';
import { ArrowForwardIcon } from '@chakra-ui/icons';


export default function Landing() {
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

	const { isOpen, onOpen, onClose } = useDisclosure();
	const tabImages = [PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder];
	const [modalImage, setModalImage] = React.useState(tabImages[0]);

	return (
		<ChakraProvider theme={theme}>
			<Box>
				<Box
					bg='gray.800'
					bgImage={`url(${Blue})`}
					pb='3%'
					backgroundPosition='center'
					backgroundRepeat='no-repeat'>
					<Heading
						fontSize={{ base: '3em', md: '4em', lg: '5em' }}
						fontWeight='500'
						align='center'
						color='purple.200'
						pt='8%'>
						Thia
					</Heading>
					<Text
						fontSize={{ base: '1em', md: '1.33em', lg: '1.66em' }}
						fontWeight='100'
						align='center'
						color='white'
						p='2%'>
						A decentralized alternative to cloud AutoML run within your ecosystem
					</Text>
					<Flex justify='center'>
						<Button
							_hover={{ color: 'purple.200' }}
							bg='gray.800'
							color='white'
							border='1px'
							m='1%'>
							Try for free
						</Button>
						<Button
							_hover={{ color: 'purple.200' }}
							bg='gray.800'
							color='white'
							border='1px'
							m='1%'>
							Watch video
						</Button>
					</Flex>
				</Box>

				<Box>
					<Wrap justify='center' align='center' spacing='10%' p='6%' bg='gray.100'>
						<WrapItem>
							<Box w={{ base: '100%', sm: '400px' }}>
								<Text fontSize={{ base: '1em', md: '1.5em' }}>Train</Text>
								<Heading pb='2%' fontSize={{ base: '1em', md: '1.5em' }}>
									Train your computer vision model on Thia's engine
								</Heading>
								<Text>
									Thia makes training models a breeze! Import your dataset, label,
									and click train.
								</Text>
							</Box>
						</WrapItem>
						<WrapItem>
							<Box>
								<Image src={PlaceHolder} />
							</Box>
						</WrapItem>
					</Wrap>
					<Wrap justify='center' align='center' spacing='10%' p='6%' bg='gray.50'>
						<WrapItem display={{ base: 'none', md: 'flex' }}>
							<Box>
								<Image src={PlaceHolder} />
							</Box>
						</WrapItem>
						<WrapItem>
							<Box w={{ base: '100%', sm: '400px' }}>
								<Text fontSize={{ base: '1em', md: '1.5em' }}>Export</Text>
								<Heading pb='2%' fontSize={{ base: '1em', md: '1.5em' }}>
									Export the model in an optimized format
								</Heading>
								<Text>
									Once trained, Thia can export an optimized model format that you
									can convert and use in any environment of your choice.
								</Text>
							</Box>
						</WrapItem>
						<WrapItem display={{ base: 'flex', md: 'none' }}>
							<Box>
								<Image src={PlaceHolder} />
							</Box>
						</WrapItem>
					</Wrap>
					<Wrap justify='center' align='center' spacing='10%' p='6%' bg='gray.100'>
						<WrapItem>
							<Box w={{ base: '100%', sm: '400px' }}>
								<Text fontSize={{ base: '1em', md: '1.5em' }}>Serve</Text>
								<Heading pb='2%' fontSize={{ base: '1em', md: '1.5em' }}>
									Skip implementation and serve directly onto a machine
								</Heading>
								<Text>
									Bypass the headache of using the exported model entirely and let
									Thia package it all up to be served on a linux machine and
									generate predictions via our REST API.
								</Text>
							</Box>
						</WrapItem>
						<WrapItem>
							<Box>
								<Image src={PlaceHolder} />
							</Box>
						</WrapItem>
					</Wrap>
				</Box>

				<Box align='center' justify='center' p='7%'>
					<Heading pb='5%' fontSize={{ base: '2em', md: '3em' }}>
						Use Cases
					</Heading>
					<Box>
						<Modal
							isCentered
							isOpen={isOpen}
							onClose={onClose}
							motionPreset='slideInBottom'>
							<ModalOverlay>
								<ModalContent>
									<ModalCloseButton />
									<Image src={modalImage} />
								</ModalContent>
							</ModalOverlay>
						</Modal>
						<Tabs isFitted>
							<TabList>
								<Tab onClick={() => setModalImage(tabImages[0])}>One</Tab>
								<Tab onClick={() => setModalImage(tabImages[1])}>Two</Tab>
								<Tab onClick={() => setModalImage(tabImages[2])}>Three</Tab>
								<Tab onClick={() => setModalImage(tabImages[3])}>Four</Tab>
							</TabList>
							<TabPanels>
								{tabImages.map((imageSrc) => {
									return (
										<TabPanel>
											<Image onClick={onOpen} src={imageSrc} />
										</TabPanel>
									);
								})}
							</TabPanels>
						</Tabs>
					</Box>
				</Box>

				<Box
					bg='gray.800'
					bgImage={`url(${Blue})`}
					pb='3%'
					backgroundPosition='center'
					backgroundRepeat='no-repeat'>
					<Heading
						align='center'
						fontSize={{ base: '2em', md: '3em', lg: '4em' }}
						fontWeight='500'
						color='purple.200'
						pt='8%'>
						Ready to Start?
					</Heading>
					<Text
						align='center'
						fontSize={{ base: '1em', md: '1.33em', lg: '1.66em' }}
						fontWeight='100'
						color='white'
						p='2%'>
						Integrate Thia into your app easily with our documentation or take the
						tutorial to get started!
					</Text>
					<Flex justify='center'>
						<Button
							_hover={{ color: 'purple.200' }}
							bg='gray.800'
							color='white'
							border='1px'
							m='1%'>
							Docs
						</Button>
						<Button
							rightIcon={<ArrowForwardIcon />}
							_hover={{ color: 'purple.200' }}
							bg='gray.800'
							color='white'
							border='1px'
							m='1%'>
							Get Started
						</Button>
					</Flex>
				</Box>
			</Box>
		</ChakraProvider>
	);
}
