"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import { useQuery } from "@tanstack/react-query";
import { getRandomPhotos } from "../queryhooks/getPhotos";
import ImageCard from "../components/ImageCard";
import ImagesCatalogue from "../components/ImagesCatalogue";

type Props = {};

const ACCESSKEY = process.env.NEXT_PUBLIC_ACCESSKEY;

const MainPage = (props: Props) => {
	const [search, setSearch] = useState("");
	const [photosLoaded, setphotosLoaded] = useState();
	const [page, setPage] = useState(2);

	const {
		isLoading: isLoadingRandomPhotos,
		data: photos,
		refetch,
	} = useQuery({
		queryKey: ["RandomPhotos", page],
		queryFn: getRandomPhotos,
	});

	useEffect(() => {
		if (isLoadingRandomPhotos) {
			return;
		}
		setphotosLoaded(photos);
	}, [isLoadingRandomPhotos, photos]);

	return (
		<div className="flex flex-col">
			<Navbar searchText={search} setSearchText={setSearch} />
			<Cover searchText={search} setSearchText={setSearch} />
			{photosLoaded && <ImagesCatalogue data={photosLoaded} />}
		</div>
	);
};

export default MainPage;
