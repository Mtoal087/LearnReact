// App.tsx

import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

const App = () => {
	const [alertVisible, setAlertVisible] = useState(false);

	const clickHandler = () => {
		setAlertVisible(true);
	};

	return (
		<div>
			{alertVisible && (
				<Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
			)}
			<Button
				func={clickHandler} //color={color}
			>
				My Button
			</Button>
		</div>
	);
};

export default App;
