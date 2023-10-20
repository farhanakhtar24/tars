"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSearchedPhotos } from "@/app/queryhooks/getPhotos";
import Spinner from "@/app/components/ui/Spinner";
import ImagesCatalogue from "@/app/components/ui/ImagesCatalogue";

type Props = {};

const SearchPage = (props: Props) => {
	const searchParams = useSearchParams();
	const search = searchParams.get("query");

	const [photosLoaded, setphotosLoaded] = useState<any[]>([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setphotosLoaded([]);
		setPage(1);
	}, [search]);

	const {
		isLoading: isLoadingSearchedPhotos,
		data: SearchedPhotos,
		refetch: refetchSearchedPhotos,
	} = useQuery({
		queryKey: ["SearchedPhotos", page, search],
		queryFn: getSearchedPhotos,
	});

	useEffect(() => {
		if (!isLoadingSearchedPhotos) {
			setphotosLoaded((prevPhotos) => [
				...prevPhotos,
				...SearchedPhotos.results,
			]);
		}
	}, [SearchedPhotos, isLoadingSearchedPhotos]);

	useEffect(() => {
		function handleScroll() {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight
			) {
				setPage((prevPage) => prevPage + 1);
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		refetchSearchedPhotos();
	}, [page, refetchSearchedPhotos]);

	return (
		<div className="flex flex-col">
			{isLoadingSearchedPhotos && (
				<div className="flex flex-1 justify-center items-center p-10">
					<Spinner />
				</div>
			)}
			{!isLoadingSearchedPhotos && (
				<div className="w-full flex justify-center items-center">
					<h1 className="w-3/4 text-4xl font-bold pt-10 text-[#4F4F4F]">
						{search}
					</h1>
				</div>
			)}
			<ImagesCatalogue data={photosLoaded} />
			{isLoadingSearchedPhotos && photosLoaded.length > 0 && (
				<div className="flex flex-1 justify-center items-center p-10">
					<Spinner />
				</div>
			)}
		</div>
	);
};

export default SearchPage;
