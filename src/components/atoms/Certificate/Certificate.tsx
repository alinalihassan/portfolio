import { FC } from 'react';
import { format } from 'date-fns';
import { StyledCertificate } from './styles';
import { ICertificate } from 'Types/certificate';
import Image from 'next/image';
import { Grid, Cell } from "styled-css-grid";

export interface CertificateProps {
	certificate: ICertificate;
}

const Certificate: FC<CertificateProps> = ({ certificate }) => {
	return (
		<StyledCertificate>
			<Grid columns={12} rows={2}>
				<Cell width={1} height={2}><Image src={certificate.image} width="56px" height="56px" alt="Certificate Badge" /></Cell>
				<Cell height={1} width={10}>
					<div>
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
					</div>
				</Cell>
				<Cell height={1} width={1}>
					<div>{format(new Date(certificate.date), 'MM/yyyy')}</div>
				</Cell>
				<Cell width={1}>
					<em>
						{certificate.institute}
					</em>
				</Cell>
			</Grid>
		</StyledCertificate>
	);
};

export { Certificate };
