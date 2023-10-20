"use client";
import React, { useState } from "react";
import logo from "../../assets/Image Gallery Logo.svg";
import Image from "next/image";
import SearchBar from "../SearchBar";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { ThemeSwitcher } from "./ThemeSwitcher";

type Props = {};

const Navbar = ({}: Props) => {
	const [openSearch, setOpenSearch] = useState(false);
	console.log("openSearch", openSearch);

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="w-full flex justify-center">
				<div
					className="sm:w-3/4 flex justify-between items-center sm:p-5
				py-4 w-4/5">
					<Link href="/" className="w-1/2 sm:w-fit">
						<Image
							className="w-44 h-10"
							src={logo.src}
							alt="Image Galley Logo"
							width={999}
							height={999}
						/>
					</Link>
					<div className="hidden sm:flex">
						<SearchBar />
					</div>
					<ul className="gap-4 font-bold text-xs hidden sm:flex">
						<li className="cursor-pointer">Explore</li>
						<li className="cursor-pointer">Collection</li>
						<li className="cursor-pointer">Community</li>
					</ul>
					<div className="hidden font-bold text-xs sm:block">
						<ThemeSwitcher />
					</div>
					<div className="sm:hidden flex gap-2 text-xs font-bold items-center">
						<CiSearch
							className="w-6 h-6"
							onClick={() => {
								setOpenSearch(!openSearch);
							}}
						/>
						<RxHamburgerMenu className="w-6 h-6" />
						<ThemeSwitcher />
					</div>
				</div>
			</div>
			{openSearch && <SearchBar />}
		</div>
	);
};

export default Navbar;
