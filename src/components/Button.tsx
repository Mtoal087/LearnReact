// Button.tsx

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	func: () => void;
	color?: 'primary' | 'secondary' | 'danger' | 'success';
}

const Button = ({ children, func, color = 'primary' }: Props) => {
	return (
		<button className={'btn btn-' + color} onClick={func}>
			{children}
		</button>
	);
};

export default Button;
