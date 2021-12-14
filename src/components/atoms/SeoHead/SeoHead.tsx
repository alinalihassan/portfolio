import { FC } from 'react';
import Head from 'next/head';

export interface HeadProps {
	title: string;
	description: string;
	lang?: string;
	keywords?: string;
	author?: string;
	image?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
}

const SeoHead: FC<HeadProps> = ({
	title,
	description,
	author = 'Alin Ali Hassan',
	keywords,
	meta,
}) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content="https://alinalihassan.com/" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content={author} />
			{meta &&
				meta.length > 0 &&
				meta.map(({ name, content }) => (
					<meta name={name} content={content} key={name} />
				))}
			{/* {image && <meta name="og:image" content={image} />}
			{image && <meta name="twitter:image" content={image} />} */}
			{keywords && <meta name="keywords" content={keywords} />}
		</Head>
	);
};

export { SeoHead };
