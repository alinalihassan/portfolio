import { FC } from 'react';
import Link from 'next/link';
import { List, StyledNavigation } from './styles';

interface NavigationProps {
	onClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onClick }) => {
	return (
		<StyledNavigation>
			<List>
				<li>
					<Link href="/">
						<a onClick={onClick}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a onClick={onClick}>About</a>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<a onClick={onClick}>Blog</a>
					</Link>
				</li>
			</List>
		</StyledNavigation>
	);
};

export { Navigation };
