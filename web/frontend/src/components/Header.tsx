import React, { useState } from 'react';
import { Box, Heading, Flex, Text, Button, extendTheme, ChakraProvider, Spacer, SpaceProps } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Link } from 'react-router-dom';

import { LoginButton } from '../components/buttons/Login';

const MenuItems = ({ children }) => (
	<Text 
		_hover={{ color: 'purple.200' }} 
		mt={{ base: 4, md: 0 }} 
		mr={6} 
		display='block'>
		{children}
	</Text>
);

const breakpoints = createBreakpoints({
	sm: '320px',
	md: '590px',
	lg: '960px',
	xl: '1200px',
});

const theme = extendTheme({ breakpoints });

export default function Header() {
	const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);

	return (
		<ChakraProvider theme={theme}>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				wrap='wrap'
				padding='1em'
				bg='gray.900'
				color='white'
				pl='5%'>
				<Flex align='center'>
					<Heading size='md' color='purple.200'>
						<Link to='/'>(logo) Thia</Link>
					</Heading>
				</Flex>

				<Spacer />

				<Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
					{show ? <CloseIcon /> : <HamburgerIcon />}
				</Box>

				<Box
					display={{ base: show ? 'block' : 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}>
					<MenuItems>
						<Link to='/docs'>Docs</Link>
					</MenuItems>

					<MenuItems>
						<Link to='/pricing'>Pricing</Link>
					</MenuItems>

					<MenuItems>
						<Link to='/blogs'>Blogs</Link>
					</MenuItems>

					<MenuItems>
						<Link to='/install'>Install</Link>
					</MenuItems>
				</Box>

				<Box
					display={{ base: show ? 'block' : 'none', md: 'block' }}
					mt={{ base: 4, md: 0 }}
					pr='5%'>
					<LoginButton />
				</Box>
			</Flex>
		</ChakraProvider>
	);
}
