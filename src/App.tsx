import { useRef } from 'react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Input } from './components/Input';
import { InputRef } from './components/InputRef';
import { Form, type FormHandle } from './components/Form';

function App() {
	const inputRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<FormHandle>(null);

	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
		formRef.current?.clear();
	}

	return (
		<main>
			<Input id='name' label='Your name' type='text' />
			<Input id='age' label='Your age' type='number' />
			<p>
				<Button>A button</Button>
			</p>
			<p>
				<Button href='https://google.com'>A link</Button>
			</p>
			<Container as={Button} onClick={() => {}} type='button'>
				Click me
			</Container>
			<InputRef label='test' id='test' ref={inputRef} />

			<Form onSave={handleSave} ref={formRef}>
				<Input id='name' label='Your name' type='text' />
				<Input id='age' label='Your age' type='number' />
				<p>
					<Button>Save</Button>
				</p>
			</Form>
		</main>
	);
}

export default App;
