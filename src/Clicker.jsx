import { useState } from 'react';

function Clicker() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h2>React Clicker with hooks</h2>
			<button onClick={decrement}>-</button>
			<span style={{ display: 'inline-block', margin: '0 1rem' }}>{count}</span>
			<button onClick={increment}>+</button>
		</div>
	);
}

export { Clicker };