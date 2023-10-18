"use client";
import React from "react";
import logo from "../assets/Image Gallery Logo.svg";
import Image from "next/image";
import SearchBar from "./SearchBar";

type Props = {
	searchText: string;
	setSearchText: any;
};

const Navbar = ({ searchText, setSearchText }: Props) => {
	return (
		<div className="w-full flex justify-center">
			<div className="w-3/4 flex justify-between items-center p-5">
				<Image
					className="w-44 h-10"
					src={logo.src}
					alt="Image Galley Logo"
					width={999}
					height={999}
				/>
				<SearchBar
					searchText={searchText}
					setSearchText={setSearchText}
				/>
				<ul className="flex gap-4 font-bold text-xs">
					<li className="cursor-pointer">Explore</li>
					<li className="cursor-pointer">Collection</li>
					<li className="cursor-pointer">Community</li>
				</ul>
				<div className="font-bold text-xs">Dark Mode</div>
			</div>
		</div>
	);
};

export default Navbar;
