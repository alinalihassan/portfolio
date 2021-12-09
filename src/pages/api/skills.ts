import type { NextApiRequest, NextApiResponse } from 'next';

const skills_req = (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'Python',
		'TypeScript',
		'Terraform',
	];
	const frameworks = ['React', 'NestJS', 'Next.js', 'FastAPI', 'Flask'];
	const cloud = ['AWS', 'Azure', 'GCP'];
	const databases = ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL'];
	const various = ['Scrum', 'Agile'];
	const design = ['Adobe XD', 'Figma'];
	const softSkills = [
		'Strong communicator',
		'Leadership',
		'Problem solving',
		'Creative thinking',
		'Flexible and adaptive',
		'Team player',
	];
	const languages = [
		{
			language: 'English',
			level: 'bilingual',
			icon: '🇬🇧',
		},
		{
			language: 'Romanian',
			level: 'bilingual',
			icon: '🇷🇴',
		},
		{
			language: 'Dutch',
			level: 'basic',
			icon: '🇳🇱',
		},
		{
			language: 'Greek',
			level: 'basic',
			icon: '🇬🇷',
		},
	];

	res.status(200).json({
		technologies,
		frameworks,
		cloud,
		databases,
		various,
		design,
		softSkills,
		languages,
	});
};

export default skills_req;