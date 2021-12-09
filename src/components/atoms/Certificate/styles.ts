import styled from 'styled-components';

const StyledCertificate = styled.div`
	margin-bottom: 3rem;
`;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 0.5rem;
	margin-left: 1rem;
	width: 100%;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const VerticalFlex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 0.5rem;
	width: 100%;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const CertificateContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	margin-bottom: 0.5rem;
`;

export { Flex, CertificateContainer, VerticalFlex, StyledCertificate };
