export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
	const res = await fetch(input, init || { mode: 'cors' });
	return res.json();
};
