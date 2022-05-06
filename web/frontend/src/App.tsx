import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { 
	Blogs, 
	Careers,
	Contact, 
	Docs, 
	Install, 
	Landing, 
	License,
	Mission,
	Pricing, 
	Privacy, 
	Team,
	Terms,
	Header,
	Footer 
} from './export'

export default function App() {
	return (

		<ChakraProvider>

			<Router>
				
				<Header />

				<Switch>
					
					<Route path="/blogs">
						<Blogs />
					</Route>

					<Route path="/careers">
						<Careers />
					</Route>

					<Route path="/contact">
						<Contact />
					</Route>

					<Route path="/docs">
						<Docs />
					</Route>

					<Route path="/install">
						<Install />
					</Route>

					<Route exact path="/">
						<Landing />
					</Route>

					<Route path="/license">
						<License />
					</Route>

					<Route path="/mission">
						<Mission />
					</Route>

					<Route path="/pricing">
						<Pricing />
					</Route>

					<Route path="/privacy">
						<Privacy />
					</Route>

					<Route path="/team">
						<Team />
					</Route>

					<Route path="/terms">
						<Terms />
					</Route>

				</Switch>

				<Footer />

			</Router>

		</ChakraProvider>
	)
}
