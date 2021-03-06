import { FC } from 'react';
import { format } from 'date-fns';
import { StyledCertificate, Parent, UpperPart, CertificateBody } from './styles';
import { ICertificate } from 'Types/certificate';

export interface CertificateProps {
	certificate: ICertificate;
}

const Certificate: FC<CertificateProps> = ({ certificate }) => {
	return (
		<StyledCertificate>
			<Parent>
				<img
					src={certificate.image}
					width="56px"
					height="56px"
					alt="Certificate Badge" />
				<CertificateBody>
					<UpperPart>
						<strong>
							{certificate.link ? (
								<a
									href={certificate.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{certificate.title}
								</a>
							) : (
								certificate.title
							)}
						</strong>{' '}
						{format(new Date(certificate.date), 'MM/yyyy')}
					</UpperPart>
					<em>{certificate.institute}</em>
				</CertificateBody>
			</Parent>
		</StyledCertificate>
	);
};

export { Certificate };