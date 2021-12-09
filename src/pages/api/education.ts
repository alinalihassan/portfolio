import type { NextApiRequest, NextApiResponse } from 'next';

const education_req = (req: NextApiRequest, res: NextApiResponse) => {
	const education = [
		{
			institute: 'Vrije Universiteit Amsterdam',
			website: 'https://vu.nl/en',
			course: 'Computer Science Bachelor',
			endDate: '2021-06-01',
			place: 'Amsterdam, The Netherlands',
			technologies: ['C++', 'Python', 'Assembly', 'Javascript', 'HTML', 'CSS', 'SQL', 'Algorithms', 'Data Structures'],
		},
		{
			institute: 'University of Helsinki',
			website: 'https://fullstackopen.com/en/',
			course: 'Full-Stack Open',
			endDate: '2019-09-30',
			place: 'remote',
			technologies: [
				'React',
				'JavaScript',
				'Node.js',
				'Express',
				'GraphQL',
				'Cypress',
				'Jest',
			],
		},
	];

	res.status(200).json({ education });
};

export default education_req;