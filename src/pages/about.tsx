import { differenceInYears } from 'date-fns';
import styled from 'styled-components';
import { useState } from 'react';

import { IEducation, IJob, ICertificate } from 'Types';

import { Container } from 'Atoms/Container';
import { Education } from 'Atoms/Education';
import { Certificate } from 'Atoms/Certificate';
import { Position } from 'Atoms/Position';
import { SeoHead } from 'Atoms/SeoHead';
import jobs from '../data/jobs';
import education from '../data/education';
import certificates from '../data/certificates';

interface IProps {
	jobs: IJob[];
	education: IEducation[];
	certificates: ICertificate[];
}

function About({ jobs, education, certificates }: IProps) {
	const [loadedJobs, setLoadedJobs] = useState(5);

	const loadMore = () => {
		setLoadedJobs((prev) => prev + 5);
	};

	const downloadCV = () => {
		window.open('https://storage.googleapis.com/alinalihassan-portfolio-assets/cv.pdf')
	};

	return (
		<>
			<SeoHead
				title="Alin Ali Hassan - Software Engineer"
				description="Software Engineer with a focus on Cloud and Backend Development. I have more than 6 years experience working in software engineering."
			/>

			<Container>
				<Headline>Hey, I&apos;m Alin Ali Hassan</Headline>
				<h3>A Senior Software Engineer from Amsterdam</h3>
				<p>
					As a passionate software/cloud engineer, I have a wide background in backend, mobile and cloud development.
					I have worked on a wide range of projects, from performant programming languages to modern web applications and APIs.
				</p>
				<p>
					I am {differenceInYears(new Date(), new Date('1998-09-27'))}{' '}
					years old and have been a developer for as long as I can think.
					The technologies I work with are Python using FastAPI for backend, and Typescript
					for backend and/or frontend using Express, NestJS, Next.js, React, React Native, etc.
					I code in my free time as well to start new personal projects or learn new technologies and frameworks in an ever-evolving domain.
				</p>
				<p>
					When I am not writing code I spend time with my friends and family, play games or travel the world by bike.
					I come from a multicultural background, being born in the United Arab Emirates, being half Syrian and half Romanian,
					and living in The Netherlands, I&apos;ve lived in very different cultural environments.
				</p>

				<h2>Experience</h2>
				{jobs.slice(0, loadedJobs).map((job, i) => (
					<Position job={job} key={job.company + i} />
				))}
				<Center>
					{loadedJobs < jobs.length && (
						<button onClick={loadMore}>Load more</button>
					)}
				</Center>

				<h2>Education</h2>
				{education.map((edu) => (
					<Education education={edu} key={edu.course} />
				))}

				<h2>Certificates</h2>
				{certificates.map((cert) => (
					<Certificate certificate={cert} key={cert.title} />
				))}

				<Center>
					<button onClick={downloadCV}><b>Download my resume</b></button>
				</Center>
			</Container>
		</>
	);
}

const Headline = styled.h1`
	font-size: 2rem;
	margin-bottom: 0;

	@media screen and (min-width: 768px) {
		font-size: 3rem;

		span {
			display: inline-block;
		}

		@keyframes wave {
			0% {
				transform: rotate(0);
			}
			50% {
				transform: rotate(-10deg);
			}
			100% {
				transform: rotate(10deg);
			}
		}

		&:hover span {
			animation: wave 0.5s ease infinite;
		}
	}
`;

const Center = styled.div`
	text-align: center;
	font-weight: bold;
	margin-top: 2rem;

	button {
		display: block;
		margin: 2rem auto;
		border: 2px solid ${({ theme }) => theme.text};
		color: ${({ theme }) => theme.text};
		padding: 0.5rem 3rem;
		border-radius: 5px;
		background: transparent;
	}
`;

export async function getStaticProps() {
	return {
		props: {
			jobs,
			education,
			certificates,
		},
	};
};

export default About;
