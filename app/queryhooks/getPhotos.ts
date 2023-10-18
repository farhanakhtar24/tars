import axios from "axios";

const ACCESSKEY = process.env.NEXT_PUBLIC_ACCESSKEY;

export const getRandomPhotos = async ({ queryKey }: any) => {
	const page = queryKey[1];
	const res = await axios.get(
		`https://api.unsplash.com/photos?page=${page}&client_id=${ACCESSKEY}`
	);
	const data = await res.data;
	return data;
};
