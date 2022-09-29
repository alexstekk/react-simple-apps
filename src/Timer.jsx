import { useState, useEffect } from 'react';

function setDefaultValue() {
	const userTime = localStorage.getItem('timer');
	return userTime ? +userTime : 0;
}

function Timer() {
	const [isActive, setIsActive] = useState(false);
	const [time, setTime] = useState(setDefaultValue());

	const startCounting = () => {
		setIsActive(true);
	};

	const stopCounting = () => {
		setIsActive(false);
	};
	const resetCounting = () => {
		setIsActive(false);
		setTime(0);
	};

	useEffect(() => {
		localStorage.setItem('timer', time);
	}, [time]);

	useEffect(() => {
		let timer = null;
		if (isActive) {
			timer = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		} else {
			clearInterval(timer);
		}
		return () => {
			clearInterval(timer);
		};
	}, [isActive]);

	return (
		<div>
			<h2>React Timer with localStorage and hooks</h2>
			<h3>
				{('0' + Math.floor((time / 60000) % 60)).slice(-2)}m {('0' + Math.floor((time / 1000) % 60)).slice(-2)}s {('0' + ((time / 10) % 100)).slice(-2)}ms
			</h3>
			{isActive ? <button onClick={stopCounting}>Stop</button> : <button onClick={startCounting}>Start</button>}
			<button onClick={resetCounting}>Reset</button>
		</div>
	);
}

export { Timer };
