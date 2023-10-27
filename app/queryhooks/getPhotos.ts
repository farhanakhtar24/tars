import axios from "axios";
import { NEXT_PUBLIC_ACCESSKEY } from "../creds";

const ACCESSKEY = NEXT_PUBLIC_ACCESSKEY;

export const getRandomPhotos = async ({ queryKey }: any) => {
	const page = await queryKey[1];
	const res = await axios.get(
		`https://api.unsplash.com/photos?page=${page}&client_id=${ACCESSKEY}`
	);
	const data = await res.data;
	return data;
};

export const getSearchedPhotos = async ({ queryKey }: any) => {
	const page = await queryKey[1];
	const searchedWord = await queryKey[2];
	const res = await axios.get(
		`https://api.unsplash.com/search/photos?page=${page}&client_id=${ACCESSKEY}&query=${searchedWord}`
	);
	const data = await res.data;
	return data;
};
