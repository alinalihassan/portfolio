import { FC } from 'react';

import Close from 'Public/assets/close.svg';
import Github from 'Public/assets/github.svg';
import Linkedin from 'Public/assets/linkedin.svg';
import Menu from 'Public/assets/menu.svg';

export interface IconProps {
	icon: 'CLOSE' | 'GITHUB' | 'LINKEDIN' | 'MENU';
}

const Icon: FC<IconProps> = ({ icon }) => {
	let Icon = () => <svg />;

	switch (icon) {
		case 'CLOSE':
			Icon = Close;
			break;
		case 'GITHUB':
			Icon = Github;
			break;
		case 'LINKEDIN':
			Icon = Linkedin;
			break;
		case 'MENU':
			Icon = Menu;
			break;
		default:
			break;
	}

	return (
		<>
			<Icon />
		</>
	);
};

export { Icon };
