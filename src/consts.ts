// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'James Newton-King';
export const SITE_TITLE_SHORT = 'JamesNK';
export const SITE_DESCRIPTION = 'James Newton-King\'s personal blog';

export function getPostUrl(post: { data: { pubDate: Date }; id: string }) {
	const date = post.data.pubDate;
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `/archive/${year}/${month}/${day}/${post.id}/`;
}
