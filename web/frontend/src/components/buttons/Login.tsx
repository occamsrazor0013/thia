import { 
	Button, 
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	Box, 
	Stack,
	Heading,
	Text, 
	Link,
	FormControl,
	FormLabel,
	Input,
	extendTheme,
	ChakraProvider
 } from '@chakra-ui/react';
 import '@fontsource/oxygen/400.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { auth, firebase } from '_/firebase/config';
import { backend } from '_rest/backend-config';

export function LoginButton() {
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
	const { isOpen, onOpen, onClose } = useDisclosure()
	const history = useHistory();
	async function googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider();
		// create popup sign in
		await auth.signInWithPopup(provider).then(
			async (user) => {
				const token = await auth.currentUser?.getIdToken(true);
				if (token) localStorage.setItem('@token', token);
				if (user.additionalUserInfo?.isNewUser) {
					// New user, send to backend
					let u = user.user;
					try {
						await backend.post(
							'/auth/addUser',
							{
								name: u?.displayName,
								email: u?.email,
								emailVerified: u?.emailVerified,
								photoURL: u?.photoURL,
								phone: u?.phoneNumber,
								token,
							},
							{
								headers: {
									Authorization: `Bearer ${token}`,
								},
							},
						);
					} catch (_e) {
						const e: AxiosError = _e;
						// TODO: Add notification
						console.log(e);
						try {
							await u?.delete();
						} catch (err) {
							// TODO: Add notification
							console.log(err);
						}
						return;
					}
				}
				if (token) {
					// navigate to dashboard
					history.push('/pricing');
				}
			},
			function (error) {
				if (error.code !== 'auth/popup-closed-by-user') console.log(error);
			},
		);
	}
	async function githubLogin() {
		const provider = new firebase.auth.GithubAuthProvider();
		// create popup sign in
		await auth.signInWithPopup(provider).then(
			async (user) => {
				const token = await auth.currentUser?.getIdToken(true);
				if (token) localStorage.setItem('@token', token);
				if (user.additionalUserInfo?.isNewUser) {
					// New user, send to backend
					let u = user.user;
					try {
						await backend.post(
							'/auth/addUser',
							{
								name: u?.displayName,
								email: u?.email,
								emailVerified: u?.emailVerified,
								photoURL: u?.photoURL,
								phone: u?.phoneNumber,
								token,
							},
							{
								headers: {
									Authorization: `Bearer ${token}`,
								},
							},
						);
					} catch (_e) {
						const e: AxiosError = _e;
						// TODO: Add notification
						console.log(e);
						try {
							await u?.delete();
						} catch (err) {
							// TODO: Add notification
							console.log(err);
						}
						return;
					}
				}
				if (token) {
					// navigate to dashboard
					history.push('/pricing');
				}
			},
			function (error) {
				if (error.code !== 'auth/popup-closed-by-user') console.log(error);
			},
		);
	}
	return (
		<ChakraProvider theme={theme}>
			<Button colorScheme='purple' border='1px' onClick={onOpen}>
				Sign in
			</Button>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg='gray.800' pl='2%' pr='2%'>

					<Box
						rounded={{ md: '2xl' }} 
						p='8'
						maxW='2xl' 
						mx='auto' 
						textAlign='center'> 

						<Stack maxW='xs' mx='auto' spacing={5}>

							<Heading size='md' color='purple.200'>
								(logo) Thia
							</Heading>

							<Stack spacing='3'>
								<Heading as='h1' letterSpacing='tight' color='white'>
									Hire the top freelancers in Dubai
								</Heading>
								<Text fontWeight='medium' color='gray.400'>
									Create an account and get 20% discount
								</Text>
							</Stack>

							<Stack spacing='3'>
								<Button
									fontSize='sm'
									fontWeight='bold'
									size='lg'
									leftIcon={<FaGoogle fontSize='18px' />}
									iconSpacing='3'
									colorScheme='blue'
									width='full'
									onClick={googleLogin}>
									Continue with Google
								</Button>
								<Button
									fontSize='sm'
									fontWeight='bold'
									size='lg'
									leftIcon={<FaGithub fontSize='18px' />}
									iconSpacing='3'
									colorScheme='gray'
									width='full'
									onClick={githubLogin}>
									Continue with Github
								</Button>
							</Stack>

							<FormControl>
								<FormLabel
									fontWeight='medium'
									fontSize='sm'
									mb='2'
									textAlign='center'
									color='gray.400'>
									or continue with email
								</FormLabel>
									<Input 
										placeholder='Email address'
										_placeholder={{ color:'gray.400' }}
										color='white'
									/>
									<Input mt='3'
										placeholder='Password'
										_placeholder={{ color:'gray.400' }}
										color='white'
									/>
							</FormControl>

							<Button mt='3' isFullWidth fontSize='sm' fontWeight='bold' colorScheme='gray'>
								Continue
							</Button>

							{/* <Box fontSize='sm'>
								<Text fontWeight='medium' color='gray.400'>
									Already have an account?
								</Text>
								<Link fontWeight='semibold' color='blue.300'>
									Log back in
								</Link>
							</Box> */}
						</Stack>
						
						<Text
							mt='16'
							fontSize='xs'
							mx='auto'
							maxW='md'
							color='gray.400'>
							By continuing, you acknowledge that you have read, understood, and agree to our
							terms and condition
						</Text>

					</Box>

				</ModalContent>

			</Modal>
		</ChakraProvider>
	);
}
