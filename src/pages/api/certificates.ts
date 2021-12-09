import type { NextApiRequest, NextApiResponse } from 'next';

import TerraformBadge from 'Public/assets/badge-terraform.png';
import ScrumBadge from 'Public/assets/badge-psmi.svg';

const certificates_req = (req: NextApiRequest, res: NextApiResponse) => {
	const certificates = [
		{
			institute: 'Hashicorp',
			link: 'https://www.credly.com/badges/21c2861c-3e87-41e2-b8d6-311f87a3ad84',
			accessKey: null,
			title: 'Terraform Associate',
			image: 'https://storage.googleapis.com/alinalihassan-portfolio-assets/badge-terraform.png',
			date: '2021-08-03',
			place: 'remote',
		},
		{
			institute: 'Scrum',
			link: 'https://www.scrum.org/certificates/554675',
			accessKey: 'hassanalinali@gmail.com',
			title: 'Professional Scrum Master I',
			image: 'https://storage.googleapis.com/alinalihassan-portfolio-assets/badge-psmi.svg',
			date: '2020-07-12',
			place: 'remote',
		},
	];

	res.status(200).json({ certificates });
};

export default certificates_req;