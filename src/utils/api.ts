import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { IPost } from 'Types/post';

type MdxType = 'BLOG';

const blogPostsDirectory = 'src/blog';

export function getSlugs(type: MdxType) {
	let dir;

	switch (type) {
		case 'BLOG':
			dir = join(process.cwd(), blogPostsDirectory);
			break;
	}

	return fs.readdirSync(dir);
}

export function getBySlug(type: MdxType, slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.mdx$/, '');
	let fullPath = '';

	switch (type) {
		case 'BLOG':
			fullPath = join(blogPostsDirectory, `${realSlug}.mdx`);
			break;
	}

	try {
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		const { data, content } = matter(fileContents);
		const items: IPost | Record<string, string> = {};
		fields.forEach((field) => {
			if (field === 'slug') {
				items[field] = realSlug;
			}
			if (field === 'content') {
				items[field] = content;
			}
			if (data[field]) {
				items[field] = data[field];
			}
		});

		return items;
	} catch {
		return null;
	}
}

export function getAllDocuments(type: MdxType, fields: string[] = []) {
	const slugs = getSlugs(type);
	const documents = slugs.map((slug) => getBySlug(type, slug, fields));

	return documents;
}
