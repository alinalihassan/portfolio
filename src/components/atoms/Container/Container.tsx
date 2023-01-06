import { FC } from 'react';
import { StyledContainer } from './styles';

interface ContainerProps {
	children?: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }: ContainerProps) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export type { ContainerProps };
export { Container };
