"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./ui/Navbar";
import Cover from "./Cover";
import { useQuery } from "@tanstack/react-query";
import { getRandomPhotos } from "../queryhooks/getPhotos";
import ImagesCatalogue from "./ImagesCatalogue";
import Spinner from "./ui/Spinner";

type Props = {};

const MainPage = (props: Props) => {
	const [photosLoaded, setphotosLoaded] = useState<any[]>([]);
	const [page, setPage] = useState(1);

	const {
		isLoading: isLoadingRandomPhotos,
		data: photos,
		refetch: refetchRandomPhotos,
	} = useQuery({
		queryKey: ["RandomPhotos", page],
		queryFn: getRandomPhotos,
	});

	useEffect(() => {
		if (!isLoadingRandomPhotos) {
			setphotosLoaded((prevPhotos) => [...prevPhotos, ...photos]);
		}
	}, [photos, isLoadingRandomPhotos]);

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
		refetchRandomPhotos();
	}, [page, refetchRandomPhotos]);

	return (
		<div className="flex flex-col">
			<Cover />
			{isLoadingRandomPhotos && (
				<div className="flex flex-1 justify-center items-center p-10">
					<Spinner />
				</div>
			)}
			<ImagesCatalogue data={photosLoaded} />
			{isLoadingRandomPhotos && photosLoaded.length > 0 && (
				<div className="flex flex-1 justify-center items-center p-10">
					<Spinner />
				</div>
			)}
		</div>
	);
};

export default MainPage;
